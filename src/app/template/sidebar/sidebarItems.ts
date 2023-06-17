interface ISidebarItems {
  name: string;
  route: string
}

export const sidebarItems: ISidebarItems[] = [
  {
    name: 'Grupo Patrimonial',
    route: '/heritage-group'
  },
  {
    name: 'Subgrupo Patrimonial',
    route: '/heritage-subgroup'
  },
  {
    name: 'Status do Processamento',
    route: '/processing-status'
  },
]
