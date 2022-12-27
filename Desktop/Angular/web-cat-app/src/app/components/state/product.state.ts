export enum ProductActionsType{
    GET_ALL_PRODUCTS = "[Product] Get All products",
    GET_SELECTED_PRODUCTS = "[Product] Get Selected products",
    GET_AVAILABLE_PRODUCTS = "[Product Get availaibel",
    EDIT_PRODUCT = "[Product edit]",
    DELETE_PRODUCT = "[Product delete]",
    SELECT_PRODUCT = "[Product select]",
}

export interface ActionEvent{
    type : ProductActionsType,
    payload? : any
}

export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
}

export interface ApptDataState<T>{
    dataState? : DataStateEnum,
    data? : T,
    errorMessage? : string
}