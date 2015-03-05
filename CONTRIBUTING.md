#Contributing to Writer's Trail Mediator

 - [Submission Guidelines](#submit)
 - [Commit Message Guidelines](#commit)

## <a name="submit"></a> Submission Guidelines

### Submitting an Issue
Before you submit your issue search the archive, maybe your question was already answered.
If not, you may open a new issue.

In case you found a bug, please make a thorough description of what you were doing and what
happened. If possible, create a test case on [Gist](https://gist.github.com) and link it
in the issue. You can also try to fix the bug yourself, but please state so in the issue and
follow the guidelines present in this document.

If it's a suggestion for a feature or a change, you can also open an issue. You must describe
the change/feature and a motivation for it. [Writer's Trail](http://writerstrail.georgemarques.com.br)
is meant to support any workflow and we do like suggestions. However, we might have some priorities.
It's better if you discuss it first at our [Gitter chat](https://gitter.im/flikore/writerstrail-mediator).

For questions, the [chat](https://gitter.im/flikore/writerstrail-mediator) is the best channel. Note
that these are questions about the **code** and the **API interface**. This is not a general user
support.

### Submitting a Pull Request
Before you submit your pull request consider the following guidelines:

* Search [GitHub](https://github.com/flikore/writerstral-mediator/pulls) for an open or closed Pull Request
  that relates to your submission. You don't want to duplicate effort.

* Also, check the [`develop branch`](https://github.com/flikore/writerstral-mediator/tree/develop) to make
  sure your work wasn't already done.

* You should first open an issue and/or comment at [Gitter chat](https://gitter.im/flikore/writerstrail-mediator)
  before diving into code. This assures your pull request will be accepted. Don't make your work useless.

* Understand thar your code will be released under the [CPAL 1.0 license](/license). You'll have the credit
  for the code you write and may use it in any way you want. We also might use it in other Flikore projects
  and change it at our own convenience.

* Make your changes in a new git branch from the `develop` branch. Make sure you start the branch name with
  `feature/` or `fix/`, depending or what you're doing. Also include the issue number for reference:

     ```shell
     git checkout -b feature/123-my-branch develop
     ```

* Code it, **including appropriate test cases**.
  * Feel free to add yourself as a contributor in `package.json` file.

* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit-message-format) and passes our commit message presubmit hook
  `validate-commit-msg.js`. Adherence to the [commit message conventions](#commit-message-format)
  is required because release notes are automatically generated from these messages.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.
* Build your changes locally to ensure all the tests pass (this includes the code style check):

    ```shell
    npm test
    ```
* Push your branch to GitHub:

    ```shell
    git push origin feature/123-my-branch
    ```
* In GitHub, send a pull request to  the `develop` branch.

* If we suggest changes then:
  * Make the required updates.
  * Re-run the tests to ensure they are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase develop -i
    git push origin feature/123-my-branch -f
    ```

That's it! Thank you for your contribution!

## <a name="commit"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the change log**.

These rules are inspired/taken from [AngularJS](https://github.com/angular/angular.js) commit
[conventions](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit).

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on github as well as in various git tools.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope
The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`, etc...

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

###Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes"
The body should include the motivation for the change and contrast this with previous behavior.

###Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

A detailed explanation can be found in this [document][commit-message-format].

[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
