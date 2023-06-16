interface ISidebarItems {
  name: string;
  route: string
}

export const sidebarItems: ISidebarItems[] = [
  {
    name: 'Grupo Patrimonial',
    route: '/app/heritage-group'
  },
  {
    name: 'Subgrupo Patrimonial',
    route: '/app/heritage-subgroup'
  },
  {
    name: 'Status do Processamento',
    route: '/app/processing-status'
  },
]
