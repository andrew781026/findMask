const ActionType = {
    TOGGLE_DRAWER: '[GLOBAL] TOGGLE_DRAWER',
    OPEN_LOADING_BLOCK: '[GLOBAL] OPEN_LOADING_BLOCK',
    CLOSE_LOADING_BLOCK: '[GLOBAL] CLOSE_LOADING_BLOCK',
};

const ActionCreator = {
    toggleDrawer() {
        return {
            type: ActionType.TOGGLE_DRAWER
        }
    },
    openLoadingBlock() {
        return {
            type: ActionType.OPEN_LOADING_BLOCK
        }
    },
    closeLoadingBlock() {
        return {
            type: ActionType.CLOSE_LOADING_BLOCK
        }
    },
};

const Selector = {
    getDrawerOpen: (state) => state.Screen.Global.drawerOpen,
    getLoadingBlockOpen: (state) => state.Screen.Global.loadingBlockOpen,
};

const initialState = {
    drawerOpen: false,
    loadingBlockOpen: false,
};

const Reducer = function (state = initialState, action) {
    switch (action.type) {
        case ActionType.TOGGLE_DRAWER: {
            return {
                ...state,
                drawerOpen: !state.drawerOpen,
            };
        }
        case ActionType.OPEN_LOADING_BLOCK : {
            return {
                ...state,
                loadingBlockOpen: true,
            };
        }
        case ActionType.CLOSE_LOADING_BLOCK : {
            return {
                ...state,
                loadingBlockOpen: false,
            };
        }
        default: {
            return state;
        }
    }
};

const ReduxGlobal = {ActionType, ActionCreator, Reducer, Selector};

export default ReduxGlobal;
