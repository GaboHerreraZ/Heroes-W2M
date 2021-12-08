import { ColumnsTable } from "src/app/shared/models/columns";

export const HeroTable: ColumnsTable[] = [
    {
        title: 'Id',
        responseName: 'id',
        type: 'number'
    },
    {
        title: 'Nombre',
        responseName: 'name',
        type: 'string'
    },
    {
        title: 'Heroe',
        responseName: 'nickName',
        type: 'string'
    },
    {
        title: 'Edad',
        responseName: 'age',
        type: 'string'
    },
    {
        title: 'Franquicia',
        responseName: 'company',
        type: 'string'
    },
    {
        title: 'Poder',
        responseName: 'power',
        type: 'string'
    },
    {
        title: 'Estatura',
        responseName: 'height',
        type: 'number'
    }
];