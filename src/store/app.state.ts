export interface LayoutSection {
  id: number;
  rows: number;
  cols: number;
  x: number;
  y: number;
  order: number;
  payload?: any;
}

export interface Layout {
  id: number;
  name: string;
  sections: LayoutSection[];
}

/* const two_col_layout_hz: Layout = {
  id: 100,
  name: "two_col_layout_hz",
  sections: [
    { id: 1, rows: 1, cols: 1, x: 0, y: 0, order: 1 },
    { id: 2, rows: 1, cols: 1, x: 1, y: 0, order: 2 }
  ]
};

const three_col_layout_hz: Layout = {
  id: 101,
  name: "three_col_layout_hz",
  sections: [
    { id: 1, rows: 1, cols: 1, x: 0, y: 0, order: 1 },
    { id: 2, rows: 1, cols: 1, x: 1, y: 0, order: 2 },
    { id: 3, rows: 1, cols: 1, x: 2, y: 0, order: 3 }
  ]
};
 */
/* export interface Workspaces {
  id: number;
  name: string;
  layout: Layout;
}

const workspace: Workspaces = {
  id: 12153,
  name: "Default workspace",
  layout: {
    id: 100,
    name: "two_col_layout_hz",
    sections: [
      {
        id: 1,
        rows: 1,
        cols: 1,
        x: 0,
        y: 0,
        payload: { bookmarkId: 15421, chartId: null }
      },
      {
        id: 2,
        rows: 1,
        cols: 1,
        x: 1,
        y: 0,
        payload: { bookmarkId: 154512, chartId: 123 }
      }
    ]
  }
};
 */
export interface Workspace {
  id: number;
  name: string;
  layoutId: number;
}
export interface Account {
  id: number;
  name: string;
}
export interface Fund {
  id: number;
  name: string;
  accounts: Account[];
}
export interface Client {
  id: number;
  name: string;
  funds: Fund[];
}
export interface Bookmark {}
export interface Chart {}

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
  layouts: Layout[];
}

// [Workspace] actions

export const state2 = {
  workspaces: {
    entities: [
      {
        id: 100,
        name: "Default workspace",
        layout: {
          id: 10,
          sections: [
            { id: 1, payload: { bookmarkId: 124523, chartId: null } },
            { id: 2, payload: { bookmarkId: 124523, chartId: 145 } }
          ]
        }
      },
      { id: 101, name: "Personal workspace" }
    ],
    selectedEntityId: 100,
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
  layouts: {
    entities: [
      {
        id: 100,
        name: "two_col_layout_hz",
        sections: [
          { id: 1, rows: 1, cols: 1, x: 0, y: 0, order: 1 },
          { id: 2, rows: 1, cols: 1, x: 1, y: 0, order: 2 }
        ]
      },
      {
        id: 101,
        name: "three_col_layout_hz",
        sections: [
          { id: 1, rows: 1, cols: 1, x: 0, y: 0, order: 1 },
          { id: 2, rows: 1, cols: 1, x: 1, y: 0, order: 2 },
          { id: 3, rows: 1, cols: 1, x: 2, y: 0, order: 3 }
        ]
      }
    ],
    loaded: false,
    loading: false
  },
  bookmarks: {
    entities: [{}]
  }
};

// new workspace
// pick layout -> add bookmark in layout item
