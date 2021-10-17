import { QuestionNumberModel } from "../shared/components/form/models/question-number.model";
import { QuestionRadio } from "../shared/components/form/models/question-radio";
import { QuestionSelectModel } from "../shared/components/form/models/question-select.model";
import { QuestionTextModel } from "../shared/components/form/models/question-text.model";
import { QuestionTextareaModel } from "../shared/components/form/models/question-textarea.model";
import { StepModel } from "../shared/components/step/step.model";

export const DRAWER_ITEMS = [
  { file: 'Quote123.pdf', user: 'ישראל ישראלי', time: '08:00', date: '19.2.21' },
  { file: 'Quote123.pdf', user: 'ישראל ישראלי', time: '08:00', date: '19.2.21' }
];

export const STEPS: StepModel[] = [
  new StepModel({
    label: 'פרטי ההתקשרות',
    svgUrl: 'contact',
    path: 'details',
    size: 3,
    variant: 'circle',
    type: 'step',
    divider: 4
  }),
  new StepModel({
    label: 'בניית הצעת מחיר',
    svgUrl: 'offer',
    path: 'create-new-contract',
    size: 3,
    variant: 'circle',
    type: 'step',
    divider: 4
  }),
  new StepModel({
    label: 'שליחה לספקים',
    svgUrl: 'send_mail',
    path: 'create-new-contract',
    size: 3,
    variant: 'circle',
    type: 'step',
    divider: 4
  }),
  new StepModel({
    label: 'ספק זוכה',
    svgUrl: 'medal',
    path: 'create-new-contract',
    size: 3,
    variant: 'circle',
    type: 'step',
    divider: 4
  }),
  new StepModel({
    label: 'הזמנת רכש',
    svgUrl: 'order',
    path: 'create-new-contract',
    size: 3,
    variant: 'circle',
    type: 'step',
  }),
];
/// form inputs
export const CONTRACT_FIRST_INPUT = [
  new QuestionSelectModel({
    key: 'typeContact',
    label: 'סוג התקשרות',
    options: [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }],
  }),

  new QuestionTextModel({
    key: 'nameContact',
    label: 'שם ההתקשרות',
  }),
  new QuestionTextareaModel({
    key: 'detailsContact',
    label: 'פירוט התקשרות',
  })
];

export const CONTRACT_SECOND_INPUT_PART_ONE = [
  new QuestionSelectModel({
    key: 'division',
    label: 'החטיבה המבקשת',
    options: [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }],
  }),
  new QuestionSelectModel({
    key: 'unit',
    label: 'היחידה המבקשת',
    options: [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }],
  }),
  new QuestionRadio({
    key: 'radio',
    label: '',
    options: [{label:'ללא',value:'A' , checked:true},{ label: 'בשיתוף', value: 'B' }, { label: 'עבור', value: 'C' }],
  }),
];

export const CONTRACT_SECOND_INPUT_PART_TWO = [
  new QuestionSelectModel({
    key: 'subDivision',
    label: 'חטיבה',
    options: [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }],
  }),
  new QuestionSelectModel({
    key: 'subUnits',
    label: 'היחידה המבקשת',
    options: [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }],
  }),
];
export const CONTRACT_SECOND_INPUT_PART_THREE = [
  new QuestionSelectModel({
    key: 'mainClassification',
    label: 'סיווג ראשי',
    options: [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }],
  }),
  new QuestionSelectModel({
    key: 'secondaryClassification',
    label: 'סיווג משני',
    options: [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }],
  }),
];

export const CONTRACT_THREED_INPUT = [
  new QuestionNumberModel({
    key: 'price',
    label: 'מחיר',
  }),
  new QuestionNumberModel({
    key: 'quality',
    label: 'איכות',
  }),
];

export const APPROXIMATE_CONNECTION = [
  new QuestionNumberModel({
    key: 'price',
    label: '',
  }),
]