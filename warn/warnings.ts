/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports functions for working with the default `WarningManager`.
 */

import { WarningManager } from './warning_manager.ts';

/**
 * The centralized {@link WarningManager}.
 */
let warnings: WarningManager = new WarningManager();

/**
 * Sets the centralized {@link WarningManager}.
 *
 * This is used for setting the de-centralized {@link WarningManager} to another {@link WarningManager}.
 *
 * @param manager The new {@link WarningManager}.
 *
 * @example
 * ```ts
 * import { WarningManager } from './warning_manager.ts';
 * import { setWarningManager } from './mod.ts';
 *
 * const manager = new WarningManager();
 *
 * setWarningManager(manager);
 * ```
 */
export function setWarningManager(manager: WarningManager): void {
  warnings = manager;
}

/**
 * Gets the centralized {@link WarningManager}.
 *
 * @returns The centralized {@link WarningManager}.
 *
 * @example
 * ```ts
 * import { getWarningManager } from './mod.ts';
 *
 * const manager = getWarningManager();
 * ```
 */
export function getWarningManager(): WarningManager {
  return warnings;
}
