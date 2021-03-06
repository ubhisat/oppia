// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview End-to-end testing utilities for the Continue Button
 * interaction.
 */

var objects = require('../../objects/protractor.js');

var customizeInteraction = function(elem, buttonText) {
  if (buttonText) {
    objects.UnicodeStringEditor(
      elem.element(by.tagName('schema-based-unicode-editor'))
    ).setValue(buttonText);
  }
};

var expectInteractionDetailsToMatch = function(elem, buttonText) {
  expect(
    elem.element(by.tagName('oppia-interactive-continue')).
      element(by.tagName('button')).getText()
  ).toBe(buttonText.toUpperCase());
};

var submitAnswer = function(elem) {
  elem.element(by.tagName('oppia-interactive-continue')).click();
};

var testSuite = [];

exports.customizeInteraction = customizeInteraction;
exports.expectInteractionDetailsToMatch = expectInteractionDetailsToMatch;
exports.submitAnswer = submitAnswer;
exports.testSuite = testSuite;
