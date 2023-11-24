// Copy pasted from CodePen
// Copyright (c) 2023 by Frontend SDA (https://codepen.io/frontendsda/pen/qxpmmb)
// Fork of an original work GitHub Repo Cards (https://codepen.io/adambutler/pen/YNjOxr

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

$("[data-github]").each(function () {
  var _this = this;
  var repo = $(_this).data("github");
  
  fetch("https://api.github.com/repos/" + repo)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      $(_this).find("[data-forks]").text(response.forks);
      $(_this).find("[data-stars]").text(response.stargazers_count);

    });
});
