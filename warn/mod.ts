/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 *
 * The `@kz/core/warn` module provides utilities and warnings for tracking of application issues.
 *
 * ## Features
 *
 * * `WarningManager` class for collecting and displaying `Warning` instances.
 * * `ConsoleWarningObserver` class for observing `Warning` instances and logging them to the console.
 * * `Warning` class for creating custom warnings.
 *
 * ```
 * import { WarningManager, ConsoleWarningObserver } from './mod.ts';
 *
 * const warn = new WarningManager();
 *
 * warn.subscribe(new ConsoleWarningObserver());
 *
 * warn.warn('This is a warning message.'); // logs through ConsoleWarningObserver
 *
 * const warnings = warn.getWarnings();
 * ```
 *
 * @module warn
 */

export * from './exceptions/mod.ts';
export { getWarningManager, setWarningManager } from './warnings.ts';
export { WarningManager } from './warning_manager.ts';
export { ConsoleWarningObserver } from './console_warning_observer.ts';
