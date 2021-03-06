import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TableModule } from './ngx-easy-table/table.module';
import { routing } from './routes';

import {
  AsyncComponent,
  BasicComponent,
  CheckboxDefaultComponent,
  CheckboxesComponent,
  ClickEventComponent,
  CollapsedRowsComponent,
  ColTemplateComponent,
  ColumnWidthComponent,
  CustomFiltersComponent,
  CustomIntableSortComponent,
  CustomizeThemeComponent,
  CustomSortComponent,
  DynamicConfigurationComponent,
  DynamicRowComponent,
  ExchangeTemplateComponent,
  ExportComponent,
  ExportsComponent,
  FilterTemplateComponent,
  FixedWidthComponent,
  GlobalSearchComponent,
  GroupRowsComponent,
  HorizontalScrollComponent,
  LiveUpdateComponent,
  ManyTablesComponent,
  ModalComponent,
  PaginationComponent,
  PaginationRangeComponent,
  PersistStateComponent,
  ResizableComponent,
  RowTemplateComponent,
  SearchComponent,
  SelectCellComponent,
  SelectColComponent,
  SelectRowComponent,
  ServerPaginationComponent,
  ServerSortComponent,
  SortComponent,
  StylesComponent,
  SummaryFooterComponent,
  TemplateComponent,
  ToggleColumnComponent,
} from './demo';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    TableModule,
    routing,
    // TrendModule,
  ],
  declarations: [
    AppComponent,
    BasicComponent,
    SearchComponent,
    PaginationComponent,
    GlobalSearchComponent,
    SortComponent,
    ExportComponent,
    ClickEventComponent,
    TemplateComponent,
    SelectRowComponent,
    SelectColComponent,
    SelectCellComponent,
    ModalComponent,
    LiveUpdateComponent,
    ExchangeTemplateComponent,
    ServerPaginationComponent,
    RowTemplateComponent,
    ServerSortComponent,
    GroupRowsComponent,
    ManyTablesComponent,
    DynamicRowComponent,
    CustomSortComponent,
    CollapsedRowsComponent,
    HorizontalScrollComponent,
    CheckboxesComponent,
    CustomFiltersComponent,
    ToggleColumnComponent,
    DynamicConfigurationComponent,
    CheckboxDefaultComponent,
    ExportsComponent,
    ResizableComponent,
    ColumnWidthComponent,
    FixedWidthComponent,
    CustomizeThemeComponent,
    StylesComponent,
    ColTemplateComponent,
    SummaryFooterComponent,
    FilterTemplateComponent,
    CustomIntableSortComponent,
    PersistStateComponent,
    PaginationRangeComponent,
    AsyncComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {
}
