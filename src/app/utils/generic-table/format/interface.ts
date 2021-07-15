export interface DTFilterField {
    value: string;
    description: string;
}

export interface DTColumn {
    /** Ancho de la columna */
    width?: number | string;

    /** Atributo que se consultará al backend, por defecto attribute */
    dataAttribute?: string;

    /** Atributo que se mostrará en la columna */
    attribute?: string;

    /** Cabecera de la columna, por defecto title case de attribute */
    header?: string;

    /** Ruta para el routerLink del enlace de la columna */
    routerLink?: string;

    /** Atributo que se pasa como parámetro al routerLink, por defecto id */
    routerLinkAttribute?: string;

    /** Tipo de columna. Por defecto text */
    type?: 'date' | 'img' | 'text' | 'bool' | 'json';

    /** Formato de fecha de la columna. Por defecto defaultDateFormat */
    dateFormat?: string;

    /** Valor por defecto de la columna, por defecto N/A para text y date, e 'imagen no disponible' para img */
    default?: string;

    /** Clave del diccionario de plantillas de donde se extrae el template para la columna */
    template?: string;

    /** Acortar uuid de la columna (sólo válido para columnas con UUID) */
    shortUUID?: boolean;

    /** Css que se aplica a td de la columna */
    className?: string;

    /** Separador de elementos de un array a mostrar en el excel */
    separatorExcelColumn?: string;

    /** Define si un elemento (columna) tiene como valor un object */
    objectExcelColumn?: boolean;

    /** Define que propiedad del objeto de una columna se mostrará en el excel 
     * (Funciona solo si el atributo objectExcelColumn esta) */
    propertyObjectExcelColumn?: string;

    /** Define si a la columna se le oculta el filtro o no */
    hideFilter?: boolean;
}