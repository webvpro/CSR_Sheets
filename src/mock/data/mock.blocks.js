export default blocks = [
  {
    _uid: "nameblock1",
    component: "NameBlock",
    headline: "Name",
    data: {
      name: "Nubus",
      imageSrc: "../assets/images/ArmadaSpire.png",
      descriptor: {
        id: "ABCD",
        name: "Clever",
        description: "CSR Page 133",
        sub: { name: "elf", description: "pointy ears" },
      },
      type: { id: "arkus123", name: "Arkus", description: "NDES page 133" },
      focus: {
        id: "focus-123",
        name: "Entertains",
        description: "CSR page 133",
      },
    },
  },
  {
    _uid: "TierBlock1",
    component: "TierBlock",
    headline: "Name",
    data: {},
  },
  {
    _uid: "nameblock3",
    component: "StatusBlock",
    headline: "Name",
    data: {
      pools: [
        { name: "Might", base: 10, current: 10, edge: 0 },
        { name: "Speed", base: 10, current: 10, edge: 0 },
        { name: "Intellect", base: 10, current: 10, edge: 0 },
        { name: "TestO", base: 10, current: 10, edge: 0 },
      ],
      recovery: {
        actionTaken: false,
        tenMinTaken: false,
        hourTaken: false,
        diceBonus: 3,
        debiliated: false,
        impaired: false,
      },
    },
  },
  {
    _uid: "nameblock4",
    component: "SkillsBlock",
    headline: "Name",
    data: {
      skills: [
        {
          id: "sk-111",
          name: "public speaking",
          description: "CSR PG 88",
          trained: false,
          specialized: false,
          inability: false,
        },
      ],
    },
  },
  {
    _uid: "nameblock4",
    component: "AttackBlock",
    headline: "Name",
    data: {
      attacks: [
        {
          id: "sk-111",
          name: "public speaking",
          description: "CSR PG 88",
          trained: false,
          specialized: false,
          inability: false,
        },
      ],
    },
  },
  {
    _uid: "nameblock4",
    component: "AbliltiesBlock",
    headline: "Name",
    data: {
      ablilities: [
        {
          id: "sk-111",
          name: "public speaking",
          description: "CSR PG 88",
          trained: false,
          specialized: false,
          inability: false,
        },
      ],
    },
  },
];
