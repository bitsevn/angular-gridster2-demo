export class Layout {
  id: number;
  name: string;
  bookmarkId: number;
  chartId: number;
}
export class Workspace {
  id: number;
  name: string;
  layoutId: number;
}
export class Account {
  id: number;
  name: string;
}
export class Fund {
  id: number;
  name: string;
  accounts: Account[];
}
export class Client {
  id: number;
  name: string;
  funds: Fund[];
}
export class Bookmark {}
export class Chart {}

export enum BookmarkDisplayType {
  BOOKMARK = "Bookmark",
  CHART = "Chart"
}

export interface WorkspacesState {
  entities: Workspace[];
  entity: Workspace;
  loading: boolean;
  loaded: boolean;
}

export interface BookmarksState {
  entities: Bookmark[];
  entity: Bookmark | Chart;
  displayType: BookmarkDisplayType;
  loading: boolean;
  loaded: boolean;
}

export interface State {
  workspaces: WorkspacesState;
}

// [Workspace] actions

export const state = {
  workspaces: {
    entities: [
      { id: 100, name: "Default workspace" },
      { id: 101, name: "Personal workspace" }
    ],
    entity: { id: 100, name: "Default workspace" },
    loading: false,
    loaded: false
  },
  clients: {
    entities: [
      {
        id: 100,
        name: "Test client",
        funds: [
          {
            id: 11,
            name: "Offshore fund",
            accounts: [{ id: 12, name: "Test account", portfolioId: "XB12655" }]
          }
        ]
      }
    ],
    entity: { id: 100, name: "Test client", funds: [] },
    loading: false,
    loaded: false
  },
  bookmarks: {}
};

// new workspace
// pick layout -> add bookmark in layout item
