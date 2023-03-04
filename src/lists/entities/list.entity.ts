import { table } from "console"


@Table("lists")
export class List {
    name: 'List',
    properties: {
      id: { type: 'string', id: true },
      name: { type: 'string' }, 
      description: { type: 'string' },
      createdAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
    },
}