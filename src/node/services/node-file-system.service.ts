/**
 * File system calls from Node
 */

import fs from 'fs';
import path from 'path';
import { Uri } from '@shared/data/file-system.model';
import { getPathFromUri, joinUriPaths } from '@node/utils/util';
import { groupBy } from '@shared/utils/util';

/**
 * Reads a text file asynchronously
 * @param uri Uri of file
 * @returns promise that resolves to the contents of the file
 */
export async function readFileText(uri: Uri): Promise<string> {
  return fs.promises.readFile(getPathFromUri(uri), 'utf8');
}

/**
 * Reads a binary file asynchronously
 * @param uri Uri of file
 * @returns promise that resolves to the contents of the file
 */
export async function readFileBinary(uri: Uri): Promise<Buffer> {
  return fs.promises.readFile(getPathFromUri(uri));
}

/**
 * Writes the string to a file asynchronously
 * @param uri Uri of file
 * @param fileContents string to write into the file
 * @returns promise that resolves after writing the file
 */
export async function writeFileText(uri: Uri, fileContents: string): Promise<void> {
  const filePath: string = getPathFromUri(uri);
  const directoryName: string = path.dirname(filePath);
  await fs.promises.mkdir(directoryName, { recursive: true });
  return fs.promises.writeFile(filePath, fileContents);
}

export async function deleteFile(uri: Uri): Promise<void> {
  return fs.promises.rm(getPathFromUri(uri));
}

/** Type of file system item in a directory */
export enum EntryType {
  File = 'file',
  Directory = 'directory',
  Unknown = 'unknown',
}

/** All entries in a directory, mapped from entry type to array of uris for the entries */
export type DirectoryEntries = Readonly<{
  [entryType in EntryType]: Uri[];
}>;

/**
 * Reads a directory and returns lists of entries in the directory by entry type
 * @param uri uri of directory
 * @returns map of entry type to list of uris for each entry in the directory with that type
 */
export async function readDir(uri: Uri): Promise<DirectoryEntries> {
  const dirEntries = await fs.promises.readdir(getPathFromUri(uri), {
    withFileTypes: true,
  });
  return Object.fromEntries(
    groupBy(
      dirEntries,
      (dirEntry): EntryType => {
        if (dirEntry.isFile()) return EntryType.File;
        if (dirEntry.isDirectory()) return EntryType.Directory;
        return EntryType.Unknown;
      },
      (dirent) => joinUriPaths(uri, dirent.name),
    ),
  ) as DirectoryEntries;
}
