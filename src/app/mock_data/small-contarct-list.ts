import { SmallContractListModel } from "../components/small-contracts/models/small-contract-list.model";
import { QuestionRadio } from "../shared/components/form/models/question-radio";
import { WinningContractListModel } from "../components/small-contracts/models/contract-winning.model";

export const RADIOS = [
  new QuestionRadio({
    key: 'radio',
    label: '',
    options: [{ label: 'הליכים שלי', value: 'A', checked: true }, { label: 'כל ההליכים', value: 'B' }],
  }),
];

export const DATA_TABLE: SmallContractListModel[] = [
  {
    id: 20,
    procedureNumber: 'הק/11351',
    requestingUnit: 'יחידת ביצוע צפון',
    connectionType: 'רגילה',
    connectionName: 'אספלט לאתרי עבודה במרחב צפון',
    connectionAmount: 46000,
    status: {
      label: 'בטיפול - עריכת ספקים',
      value: 2,
    },
    user: 'אלישבע גוטוויל',
  },
  {
    id: 20,
    procedureNumber: 'הק/11350',
    requestingUnit: 'מפ״ק אגף ייעור',
    connectionType: 'רגילה',
    connectionName: 'ייעוץ לנושאי אקדמיה',
    connectionAmount: 28000,
    status: {
      label: 'בטיפול הזנת פרטים',
      value: 1,
    },
    user: 'אלישבע גוטוויל',
  },
  {
    id: 20,
    procedureNumber: 'הק/2940',
    requestingUnit: 'מדען ראשי',
    connectionType: 'הרחבה',
    connectionName: 'במות יום העצמאות',
    connectionAmount: 9990,
    status: {
      label: 'בוצעה הזמנה',
      value: 8,
    },
    user: 'אלישבע גוטוויל',
  },
  {
    id: 20,
    procedureNumber: 'הק/11351',
    requestingUnit: 'יחידת ביצוע צפון',
    connectionType: 'רגילה',
    connectionName: 'אספלט לאתרי עבודה במרחב צפון',
    connectionAmount: 46000,
    status: {
      label: 'בטיפול - עריכת ספקים',
      value: 2,
    },
    user: 'אלישבע גוטוויל',
  },
  {
    id: 20,
    procedureNumber: 'הק/11350',
    requestingUnit: 'מפ״ק אגף ייעור',
    connectionType: 'רגילה',
    connectionName: 'ייעוץ לנושאי אקדמיה',
    connectionAmount: 28000,
    status: {
      label: 'בטיפול הזנת פרטים',
      value: 1,
    },
    user: 'אלישבע גוטוויל',
  },
  {
    id: 20,
    procedureNumber: 'הק/2940',
    requestingUnit: 'מדען ראשי',
    connectionType: 'הרחבה',
    connectionName: 'במות יום העצמאות',
    connectionAmount: 9990,
    status: {
      label: 'בוצעה הזמנה',
      value: 8,
    },
    user: 'אלישבע גוטוויל',
  }
];


export const DATA_TABLE_WINNING: WinningContractListModel[] = [
  {
    id: 1,
    provider: {
      name: 'במה מגשימי נוער ציון',
      id: 513092654,
    },
    contact: 'מאיר דגן',
    opinion: '2 חוות דעת',
    sanction: '2 סנקציות',
    providerDocuments: '5 מסמכים',
    price: null,
    comment: '',
    quality: null,
  },
  {
    id: 2,
    provider: {
      name: 'עתידן ענתות בע"מ',
      id: 513099861,
    },
    contact: 'יואב ראובני',
    opinion: 'ללא חוות דעת',
    sanction: 'ללא סנקציות',
    providerDocuments: '2 מסמכים',
    price: null,
    comment: '',
    quality: null,
  },
  {
    id: 3,
    provider: {
      name: 'אפנת השקעות ונאמנויות',
      id: 5130998961,
    },
    contact: 'מאיר טל',
    opinion: 'ללא חוות דעת',
    sanction: 'ללא סנקציות',
    providerDocuments: '2 מסמכים',
    price: null,
    comment: '',
    quality: null,
  },

];