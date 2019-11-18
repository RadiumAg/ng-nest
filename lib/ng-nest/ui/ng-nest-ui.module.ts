import { NgModule, ModuleWithProviders } from "@angular/core";

import { XIconModule } from "@ng-nest/ui/icon";
import { XSliderModule } from "@ng-nest/ui/slider";
import { XHighlightModule } from "@ng-nest/ui/highlight";
import { XGridModule } from "@ng-nest/ui/grid";
import { XCrumbModule } from "@ng-nest/ui/crumb";
import { XInnerModule } from "@ng-nest/ui/inner";
import { XPortalModule } from "@ng-nest/ui/portal";

import { XInputModule } from "@ng-nest/ui/input";
import { XButtonModule } from "@ng-nest/ui/button";
import { XAnchorModule } from "@ng-nest/ui/anchor";
import { XTabsModule } from "@ng-nest/ui/tabs";
import { XTableModule } from "@ng-nest/ui/table";
import { XPaginationModule } from "@ng-nest/ui/pagination";

import { XDocModule } from "@ng-nest/ui/doc";
import { XExamplesModule } from "@ng-nest/ui/examples";
import { XApiModule } from "@ng-nest/ui/api";
import { XPatternModule } from "@ng-nest/ui/pattern";
import { XFormModule } from "@ng-nest/ui/form";

export * from "@ng-nest/ui/core";
export * from "@ng-nest/ui/icon";
export * from "@ng-nest/ui/grid";
export * from "@ng-nest/ui/slider";
export * from "@ng-nest/ui/highlight";
export * from "@ng-nest/ui/crumb";
export * from "@ng-nest/ui/inner";
export * from "@ng-nest/ui/portal";

export * from "@ng-nest/ui/anchor";
export * from "@ng-nest/ui/input";
export * from "@ng-nest/ui/button";
export * from "@ng-nest/ui/tabs";
export * from "@ng-nest/ui/table";
export * from "@ng-nest/ui/pagination";

export * from "@ng-nest/ui/doc";
export * from "@ng-nest/ui/examples";
export * from "@ng-nest/ui/api";
export * from "@ng-nest/ui/pattern";
export * from "@ng-nest/ui/form";

@NgModule({
  exports: [
    XIconModule,
    XSliderModule,
    XHighlightModule,
    XGridModule,
    XCrumbModule,
    XInnerModule,
    XPortalModule,
    XInputModule,
    XButtonModule,
    XAnchorModule,
    XTabsModule,
    XTableModule,
    XPaginationModule,
    XDocModule,
    XExamplesModule,
    XApiModule,
    XPatternModule,
    XFormModule
  ]
})
export class NgNestUiModule {
  /**
   * @deprecated Use `NgNestUiModule` instead.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgNestUiModule
    };
  }
}