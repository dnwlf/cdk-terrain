// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { ZipFile } from "yazl";
import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import { AddressInfo } from "net";

function addDirectory(zip: ZipFile, dir: string, prefix: string) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const zipPath = prefix ? `${prefix}/${entry}` : entry;
    if (fs.statSync(fullPath).isDirectory()) {
      addDirectory(zip, fullPath, zipPath);
    } else {
      zip.addFile(fullPath, zipPath);
    }
  }
}

export class TemplateServer {
  private server: http.Server;
  private static templateFile = "template.zip";

  constructor(private srcDirectory: string) {
    this.server = http.createServer(this.handle);
  }

  handle = (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url !== `/${TemplateServer.templateFile}`) {
      res.statusCode = 404;
      res.end();
    }

    res.on("error", (err) => {
      throw err;
    });
    res.writeHead(200, {
      "Content-Type": "application/zip",
    });

    const zip = new ZipFile();
    zip.outputStream.pipe(res);
    addDirectory(zip, this.srcDirectory, "");
    zip.end();
  };

  async start(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        this.server.listen(() => {
          const { port } = this.server.address() as AddressInfo;
          resolve(`http://localhost:${port}/${TemplateServer.templateFile}`);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) =>
      this.server.close((err) => (err ? reject(err) : resolve())),
    );
  }
}
