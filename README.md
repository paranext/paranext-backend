# paranext-core

Electron client, extension host, and C# library for Paranext

<div align="center">
  <img src="doc-meta/doc-icon.png" />
</div>

<div align="center">

[![Build Status][github-actions-status]][github-actions-url]
[![Github Tag][github-tag-image]][github-tag-url]

</div>

## Users

This software is not yet ready for users. We'll update here with where you can install it when its ready.

### Linux Users

To use `.AppImage` files in Linux, [install FUSE](https://github.com/AppImage/AppImageKit/wiki/FUSE) (you only need to do this once), for example, on Ubuntu (>= 22.04):

```bash
sudo apt install libfuse2
```

Then simply [execute/run](https://github.com/AppImage/AppImageKit/wiki) the `.AppImage` file, which you can download from [Releases](https://github.com/paranext/paranext-core/releases).

## Developer Install

Set up pre-requisites for building:

### Linux Development Pre-requisites

Add the system libraries needed for Electron, [Build Instructions (Linux)](https://www.electronjs.org/docs/latest/development/build-instructions-linux).

### All Platforms Development Pre-requisites

Install `dotnet` [.NET 7 SDK from here](https://learn.microsoft.com/en-us/dotnet/core/install/).

To check if `dotnet` is installed run (ensure you have a v7 SDK):

```bash
dotnet --version
dotnet --list-sdks
```

### Cloning and installing dependencies (all platforms)

Clone the repo and install dependencies:

```bash
git clone https://github.com/paranext/paranext-core.git
cd paranext-core
npm install
```

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

After you run `npm start` (or, in VSCode, launch `Debug Paranext Core`), you can edit the code, and the relevant processes will hot reload.

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

## Publishing

1. Create a branch of the form `release/*`, e.g. `release/v1.2.3`, or `release/v1.2.3-rc1`.
2. Update the _version_ in your project's `release/app/package.json` file (e.g. _1.2.3_).
3. Run `npm i` in that folder to update its `package-lock.json`.
4. Create a new draft [GitHub **Release**](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository), ensure the following are included:
   - a _Tag version_, e.g. `v1.2.3`, choose _Create new tag on publish_.
   - set the **Target** to the release branch.
   - a copy of the change log. Click **Generate release notes** as a starting point.
   - Click **Save draft**.
5. Update `CHANGELOG.md` with changes in this release from the GitHub draft **Release**.
6. Commit these changes to your release branch and push the commit to GitHub.
7. Once the GitHub build **Action** has finished, it will add build artifact files to the draft release. Remove the `.blockmap` files and leave the `.yml` files and the installers and executable, e.g. `.exe` on Windows.
8. Publish the release on GitHub.
9. Merge the release branch back into **main** with a merge commit.

## Windows Development with WSL2

On Windows, you can install [WSL](https://learn.microsoft.com/en-us/windows/wsl/) (Windows Subsystem for Linux) so you can test cross-platform compatibility on Linux (as well as Windows). You'll need to use a Linux distribution with WSL2 (rather than WSL1) so the X-Server windows can be opened for Electron.

1. Here is how to [install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install).
2. You'll want to follow that by setting up to use **VS Code**, **Git** and **NodeJS** with WSL. See the various [tutorials](https://learn.microsoft.com/en-us/windows/wsl/setup/environment).
3. In the WSL distribution, add system libraries needed for Electron, see [Linux Development Pre-requisites](#linux-development-pre-requisites) above.
4. In the WSL distribution, clone the repo as described above under [Developer Install](#developer-install).

You'll be running a copy of the repo in both Windows and WSL so make sure they are both up-to-date.

You can use VS Code from your host to access code in your WSL repo clone using the Microsoft [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) VS Code extension.

## VS Code Extension Options

Extensions highly recommended for this repo are already displayed in VS Code through the [Extensions Recommendations settings](https://github.com/paranext/paranext-core/blob/main/.vscode/extensions.json). These are optional extensions that our developers enjoy using:

- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)

## License

MIT © [SIL International](https://www.sil.org/)

<!-- define variables used above -->

[github-actions-status]: https://github.com/paranext/paranext-core/workflows/Test/badge.svg
[github-actions-url]: https://github.com/paranext/paranext-core/actions
[github-tag-image]: https://img.shields.io/github/tag/paranext/paranext-core.svg?label=version
[github-tag-url]: https://github.com/paranext/paranext-core/releases/latest
