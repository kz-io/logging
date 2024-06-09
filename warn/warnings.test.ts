/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the default warnings manager.
 */

import { describe, it } from '@std/testing/bdd';
import { assert, assertEquals, assertExists } from '@std/assert';

import { getWarningManager, setWarningManager, WarningManager } from './mod.ts';

describe('warnings', () => {
  describe('getWarningManager()', () => {
    it('should return the default WarningManager instance', () => {
      const warnings = getWarningManager();

      assertExists(warnings);
    });
  });

  describe('setWarningManager()', () => {
    it('should set the default WarningManager instance', () => {
      const prevManager = getWarningManager();
      const newManager = new WarningManager();

      assert(prevManager !== newManager);

      setWarningManager(newManager);

      const warnings = getWarningManager();

      assertEquals(warnings, newManager);
    });
  });
});
