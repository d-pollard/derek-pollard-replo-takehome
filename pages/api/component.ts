// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFileSync, writeFileSync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import {Component, ImageReploComponent, TextReploComponent} from "../../src/types";
import { v4 as uuid } from 'uuid';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const content = JSON.parse(
      readFileSync(`${process.cwd()}/database.json`, "utf8")
    );
    res.status(200).json(content);
  } else if (req.method === "POST") {
    const content = JSON.parse(
      readFileSync(`${process.cwd()}/database.json`, "utf8")
    );

    const type = (req.body.type as string) || 'unknown';

    let createdComponent: Component;
    let id = uuid();

    switch (type) {
      case 'text':
        const textComponent: TextReploComponent = {
          type: "text",
          text: req.body.text as string,
          id
        }
        createdComponent = textComponent;
        break;
      case 'image':
        const imageComponent: ImageReploComponent = {
          type: "image",
          src: req.body.src as string,
          id,
        }
        createdComponent = imageComponent;
        break;
      default:
        res.status(201).json(req.query);
        return;
    }

    let updatedContent = [...content, createdComponent];

    writeFileSync(`${process.cwd()}/database.json`, JSON.stringify(updatedContent), "utf8");

    res.status(200).json(updatedContent);
  } else if (req.method === "PUT") {
    const content = JSON.parse(
      readFileSync(`${process.cwd()}/database.json`, "utf8")
    ) as Component[];

    const id = (req.body.id as string) || 'unknown';
    const target = content.find(target => target.id === id);

    if (!target) {
      return res.status(404).json({ message: "Entity Not found" });
    }

    switch (target.type) {
      case "image":
        target.src = req.body.src as string;
        break;
      case "text":
        target.text = req.body.text as string;
    }

    writeFileSync(`${process.cwd()}/database.json`, JSON.stringify(content), "utf8")

    res.status(200).json({});
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
