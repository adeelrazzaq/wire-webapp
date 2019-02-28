/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

window.z = window.z || {};
window.z.components = z.components || {};

z.components.AvailabilityState = class AvailabilityState {
  constructor(params) {
    this.availability = params.availability;
    this.label = params.label;
    this.showArrow = params.showArrow || false;
    this.theme = params.theme || false;
  }
};

ko.components.register('availability-state', {
  template: `
      <!-- ko if: $data.availability() === z.user.AvailabilityType.AVAILABLE -->
        <availability-available-icon class="availability-state-icon" data-uie-name="status-availability-icon" data-uie-value="available"></availability-available-icon>
      <!-- /ko -->
      <!-- ko if: $data.availability() === z.user.AvailabilityType.AWAY -->
        <availability-away-icon class="availability-state-icon" data-uie-name="status-availability-icon" data-uie-value="away"></availability-away-icon>
      <!-- /ko -->
      <!-- ko if: $data.availability() === z.user.AvailabilityType.BUSY -->
        <availability-busy-icon class="availability-state-icon" data-uie-name="status-availability-icon" data-uie-value="busy"></availability-busy-icon>
      <!-- /ko -->
      <!-- ko if: $data.label -->
        <div class="availability-state-label" data-bind="css: {'text-theme': theme}, text: $data.label" data-uie-name="status-label"></div>
      <!-- /ko -->
      <!-- ko if: $data.showArrow -->
        <span class="availability-state-arrow"></span>
      <!-- /ko -->
        `,
  viewModel: z.components.AvailabilityState,
});
