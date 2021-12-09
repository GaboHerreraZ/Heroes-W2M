import { ColumnsTable } from "src/app/shared/models/columns";

export const HeroTable: ColumnsTable[] = [
    {
        title: 'heroTable.id',
        responseName: 'id',
        type: 'number'
    },
    {
        title: 'heroTable.name',
        responseName: 'name',
        type: 'string'
    },
    {
        title: 'heroTable.hero',
        responseName: 'nickName',
        type: 'string'
    },
    {
        title: 'heroTable.age',
        responseName: 'age',
        type: 'string'
    },
    {
        title: 'heroTable.company',
        responseName: 'company',
        type: 'string'
    },
    {
        title: 'heroTable.power',
        responseName: 'power',
        type: 'string'
    },
    {
        title: 'heroTable.height',
        responseName: 'height',
        type: 'number'
    }
];