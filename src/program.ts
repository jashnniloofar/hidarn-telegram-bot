interface IProgram {
  schedule: string;
  title: string;
  text: string;
  even?: boolean;
}
export const programs: IProgram[] = [
  {
    schedule: "0 9 * * saturday,monday,wednesday,friday",
    title: "صبحانه",
    text: "یک لیوان کوچک آب پرتقال بدون شکر + ۳۰ گرم پنیر کم چرب که شوری آن گرفته شده باشد + ۲ عدد گردو + ۱ تا ۲ عدد کف دست نان",
  },
  {
    schedule: "0 9 * * sunday,tuesday,thursday",
    title: "صبحانه",
    text: "یک لیوان شیر کم چرب محلول با دارچین (نوک قاشق چای خوری) و محلول با یک قاشق چای خوری عسل +‌ ۲۰ گرم پنیر + ۱ تا ۲ عدد کف دست نان",
  },
  { schedule: "0 11 * * *", title: "بین صبحانه و ناهار", text: "یک لیوان چای کم رنگ +‌ ۳ عدد انجیر خشک، در صورت ضعف ۲ عدد خرما یا ۲ عدد ساقه طلایی" },
  { schedule: "20 13 * * sunday,monday,wednesday,friday", title: "ده دقیقه قبل ناهار", text: "یک عدد ویتامین B1-300" },
  { schedule: "28 13 * * sunday,monday,wednesday,friday", title: "دو دقیقه قبل ناهار", text: "دو قاشق غذاخوری گلاب مخلوط با یک استکان آب ولرم (بسیار مهم)" },
  { schedule: "30 13 * * *", title: "ناهار", text: "تا ۲۵۰ گرم از مواد مجاز + یک قاشق چای خوری سماق (مهم) + ۱ تا ۲ عدد کف دست نان" },
  { schedule: "1 30 13 * * *", title: "به همراه ناهار", text: "سالاد کاهو بدون سس و نصف قاشق چای خوری پونه خشک و خیار و گوجه و آبغوره و یک قاشق غذاخوری جوانه گندم" },
  { schedule: "2 30 13 * * *", title: "به همراه ناهار", text: "یک عدد هویج پخته متوسط", even: true },
  { schedule: "30 15 * * saturday,sunday,tuesday,thursday,friday", title: "بین ناهار و عصرانه", text: "یک عدد سفیده تخم مرغ آب پز" },
  { schedule: "30 15 * * monday,wednesday", title: "بین ناهار و عصرانه", text: "لبو به مقدار ۷۰ گرم" },
  { schedule: "1 30 15 * * *", title: "بین ناهار و عصرانه", text: "یک قاشق چای خوری سبوس برنج محلول در آب ولرم", even: false },
  {
    schedule: "30 16 * * saturday,monday,wednesday,friday",
    title: "عصرانه",
    text: "یک لیوان شیر کم چرب گرم +‌ ۳ عدد ساقه طلایی یا ۳ عدد انجیر خشک",
  },
  { schedule: "30 16 * * sunday,tuesday,thursday", title: "عصرانه", text: "یک استکان دم کرده گل گاوزبان + ۲ عدد خرما یا ۳ عدد ساقه طلایی" },
  { schedule: "0 20 * * *", title: "شام", text: "دستور غذایی ناهار تا ۱۵۰ گرم +‌ یک کف دست نان" },
  { schedule: "1 0 20 * * *", title: "به همراه شام", text: "سالاد کاهو بدون سس + نصف قاشق چای خوری شوید خشک و خیار و گوجه و آبغوره" },
  { schedule: "0 23 * * *", title: "قبل خواب", text: "سه عدد عناب" },
];
