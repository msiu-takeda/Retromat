// BIG ARRAY OF ALL ACTIVITIES
// Mandatory: id, phase, name, summary, desc
// Example:
//all_activities[i] = {
//  id:        i+1,
//  phase:     int in {1-5}, 
//  name:      "",
//  summary:   "",
//  desc:      "Multiple \
//              Lines",
//  durationDetail:  "",
//  duration:    "Short | Medium | Long | Flexible", Короткая, Средняя, Длительная, Гибкая
//  stage:    "All" or one or more of "Forming, Norming, Storming, Performing, Stagnating, Adjourning" Формирование, Бурление, Нормирование, Функционирование
//  source:    "",
//  more:      "", // a link
//  suitable:  "",
//};
// Values for durationDetail: "<minMinutes>-<maxMinutes> perPerson"
// Values for suitable: "iteration, realease, project, introverts, max10People, rootCause, smoothSailing, immature, largeGroup" итерация, релиз, проект, интроверты, до10человек, кореннаяПричина, несформировавшийся

all_activities = [];

all_activities[0] = {
phase:     0,
name:      "ИПОЗ (англ. ESVP)",
summary:   "Как чувствуют себя учасники ретроспективы, как Исследователи, Покупатели, Отдыхающие или Заключённые?",
desc:      "Подготовьте флипчарт с зонами для И, П, О, З. Обьясните принцип активности:<br>\
<ul>\
    <li>Исследователи: стремятся полностью погрузиться и исследовать что произошло и улучшить работу команды.</li>\
    <li>Покупатель: Позитивно настроены, будут рады если вынесут хотя бы одну полезную для себя вещь.</li>\
    <li>Отдыхающие: Не хотят активно участвовать, но рады отвлечению от обычной работы.</li>\
    <li>Заключенный: Только тут потому, что чувствуют обязанность здесь быть.</li>\
</ul>\
Проведи опрос (анонимно, на листочках бумаги). Посчитай ответы и покажи результат на флипчарте,  \
так чтобы все видели.Если доверие в команде низкое, сознательно уничтожь бумажки с голосами,  \
чтобы обеспечить конфиденциальность. Спроси что участники думают о получинных данных. Если \
большинство Отдыхающие и Заключенные рассмотри возможность использовать всю ретроспективу для \
обсуждения этого познания.",
source:  source_agileRetrospectives,
durationDetail:  "5-10 numberPeople",
duration:    "Короткая",
stage:    "Формирование, Бурление"
};

all_activities[1] = {
phase:     0,
name:      "Прогноз Погоды",
summary:   "Участники отмечают свою 'погоду' (настроение) на флипчарте.",
desc:      "Подготовьте флипчарт с символами шторма, дождя, облаков и солнца.\
Каждый участник отмечает свое настроение на флипчатре",
duration:    "Короткая",
stage:    "All",
source:  source_agileRetrospectives
};

all_activities[2] = {
phase:     0,
name:      "Check In - короткий вопрос", // TODO This can be expanded to at least 10 different variants - how?
summary:   "Задаётся один вопрос, на который участники поочереди отвечают",
desc:      "Поочереди каждый участник отвечает на заданный вопрос или пассует - пропускает очередь.\
Примеры вопросов: <br>\
<ul>\
    <li>Одним словом - чего ты ожидаешь от этой ретроспективы?</li>\
Учитывайте проявлящиеся опасения, например напишите и отложите их - физически и ментально -  в сторону.</li>\
    <li>Во время этой ретроспективы - если бы вы были автомобилем, какой бы это был?</li>\
    <li>В каком эмоциональном состояние вы сейчас находитесь? (Например, 'радость', 'гнев', 'грусть', 'страх'?)</li>\
</ul><br>\
Избегайте оценочных комментариев к ответам, как 'Отлично!'. Простого 'Спасибо'- достаточно.",
duration:    "Короткая",
stage:    "All",
source:  source_agileRetrospectives
};

all_activities[3] = {
phase:     1,
name:      "Таймлайн - Хронология",
summary:   "Участники записывают важные события в хронологическом порядке",
desc:      "Разделитесь на группы по 5 или меньше человек. Раздайте карточки и маркеры.\
Дайте участникам 10 минут, чтобы записать памятные и для них значимые события. Важно собрать \
много перспектив. Стремление к единогласию может этому помешать. Все участиники выкладывают или \
приклеивают свои карточки на хронологически подходящюю позицию. Можно и сейчас добавлять новые  \
карточки. Анализируйте сформировавшуюся картину.<br>\
Можно использовать карточки разных цветов чтобы распознать закономерности, например:<br>\
<ul>\
    <li>Чувства/Эмоции</li>\
    <li>События (технические, организационные, ..) </li>\
    <li>Функции (тестер, разработчик, менеджер, ...)</li>\
</ul>",
source:  source_agileRetrospectives,
durationDetail:  "60-90 минут",
duration:    "Средняя",
stage:    "All",
suitable: "итерация, релиз, интроверты"
};

all_activities[4] = {
phase:     1,
name:      "Анализ историй",
summary:   "Анализ всех историй обработанных командой и поиск возможных улучшений.",
desc:      "Подготовка: соберите все истории обработанные во время итерации и возьмите их с собой \
на ретроспективу.<br> \
В группе (до 10 человек) прочитайте каждую историю и обсудите, что было удачно, а что нет.\
Если история хорошо удалась, запишите почему. Если были сложности, обсудите, что можно сделать \
по-другому в слудующий раз.<br>\
Варианты: Вместо историй вы можете использовать обработанные дефекты, запросы или любую другую комбинацию\
заданий выполненных командой.",
duration:    "Длительная",
stage:    "Бурление, Нормирование",
source:    source_findingMarbles,
suitable: "итерация, max10people"
};

all_activities[5] = {
phase:     1,
name:      "Подобное к подобному",
summary:   "Участники сопоставляют свои идеи Прекратить-Продолжать-Начать с карточками характеристик", 
desc:      "Эта активность основана на настольной игре 'Яблоки к яблокам', для более подробного \
описания игрового процесса обратитесь к описанию игры в интернете.<br> \
Вам нужно подготовить 20 карточек с характеристиками, на которых написаны прилагательные: \
<i>'Самое время', 'Мило', 'Прекрасно', 'Это Агонь!', 'Опасно', 'Свежо', 'Рискованно', 'Креативно', \
'Весело', 'Отвратительно', 'Великолепно', 'Смелая идея',</i> и т.п. <br> \
Попросите каждого участника сделать как минимум 9 карточек идей: 3 идеи что следует прекратить делать, \
3 идеи что следует продолжать делать, 3 идеи что следует начать делать. Далее начинается игра. \
Выбирается первый судья. Судья берет из стопки первую карточку с характеристикой (например <i>'Самое время'</i>), \
показывает всем, а участники выкладывают на стол свою идею текстом вниз. Тот, кто выложил последним, \
забирает идею обратно и в текущем раунде не участвует. Судья перемешивает идеи, переворачивает текстом вверх, \
и выбирает ту, которая наиболее подходит под карточку характеристики. Автор победившей идеи получает карточку \
характеристики в качестве бонуса. Использованные идеи убираются со стола и далее в игре не участвуют. \
Далее роль судьи передается следующему участнику и начинается следующий раунд. Игра заканчивается когда \
у участников заканчиваются карточки идей. Побеждает участник собравший наибольшее количество карточек характеристик. \
После игры проведите дебрифинг.",
source:    source_agileRetrospectives,
durationDetail:  "30-40",
duration:    "Длительная",
stage:    "All",
suitable: "итерация, интроверты"
};

all_activities[6] = {
phase:     1,
name:      "Гнев, грусть и радость",
summary:   "Поиск и анализ событий, по поводу которых члены команды испытывали гнев, грусть или радость.",
desc:      "Повесьте три флипчарта с названиями: 'Гнев', 'Грусть' и 'Радость' (или альтенативно '>:), :(, :) ). Подготовьте карточки \
определенного цвета для каждого чувства. Члены команды записывают события по одному на карточку цвета, подходящего к испытанному чувству. \
Когда время истекло, все прикрепляют свои карточки к соответствующим плакатам. Попросите сгруппировать карточки на каждом флипчарте и дать \
сформировавшимся группам названия. <br>\
Разберите спрашивая:\
<ul>\
    <li>Что выделяется? Что неожиданно?</li>\
    <li>Что было сложным? Что достовляло удовольствие?</li>\
    <li>Какие закономерности видны? Что они значат для команды?</li>\
    <li>Что теперь нужно сделать?</li>\
</ul>",
source:    source_agileRetrospectives,
durationDetail:  "15-25",
duration:    "Средняя",
stage:    "All",
suitable: "итерация, релиз, проект, интроверты"
};

all_activities[7] = {
phase:     2,
name:      "5 Почему",
summary:   "Докопаться до корневых причин проблемы постоянно задавая вопрос 'Почему?'",
desc:      "Объедините участников в малые группы (не более 4-х человек) и дайте каждой \
группе одну из выявленных проблем. Проинструктируйте группы:\
<ul>\
    <li>Кто-то один постоянно задает вопрос 'Почему это произошло?' чтобы прояснить цепочку событий и выявить корневую причину</li>\
    <li>Запишите корневую причину (обычно это ответ на пятый вопрос 'Почему?')</li>\
</ul>\
Попросите группы поделиться своими результатами друг с другом.",
source:    source_agileRetrospectives,
durationDetail:  "15-20",
duration:    "Короткая",
stage:    "All",
suitable: "итерация, релиз, проект, корневая_причина"
};

all_activities[8] = {
phase:     2,
name:      "Матрица обучения",
summary:   "Мозговой штурм по 4-м категориям для быстрого выявления проблем",
desc:      "После завершения этапа 'Сбор данных' нарисуйте 4 квадрата на белой доске или на \
листе флипчарта с заголовками  ':)', ':(', 'Идея!', и 'Благодарность'. Раздайте участникам стикеры. \
<ul>\
    <li>Участники могут писать свои мысли в любой квадрант. Каждая отдельная мысль на отдельном стикере.</li>\
    <li>Сгруппируйте стикеры.</li>\
    <li>Проведите голосование точками за наиболее важные мысли (6-9 точек на человека).</li>\
</ul>\
Получившийся список является отправной точкой для следующего этапа: 'Разработка плана действий'.",
source:    source_agileRetrospectives,
durationDetail:  "20-25",
duration:    "Средняя",
stage:    "All",
suitable: "итерация"
};

all_activities[9] = {
phase:     2,
name:      "Мозговой штурм / фильтрация",
summary:   "Сгенерируйте множество идей и отфильтруйте их согласно критериям",
desc:      "Изложите цель и правила проведения мозгового штурма: <em>Сперва</em> генерируем как \
можно больше новых идей, и <em>только потом</em> фильтруем.\
<ul>\
    <li>Дайте участникам 5-10 минут чтобы записать свои идеи.</li>\
    <li>Сбор идей организуйте по кругу по одной от человека. Повторяйте пока все идеи не окажутся на листе флипчарта.</li>\
    <li>Попросите участников составить список возможных критериев (например: стоимость, трудоемкость, \
сложность, инновационность и т.п.) и попросите выбрать 4.</li>\
    <li>Выберите идеи удовлетворяющие всем 4-м критериям.</li>\
    <li>Какие идеи команда возьмет в работу? Кто из участников испытывает уверенность относительно \
хотя бы одной идеи? Если нет - выберите идеи путем голосования большинством.</li>\
</ul>\
Выбранные идеи переходят на следующий этап ретроспективы: 'Разработка плана действий'.",
source:    source_agileRetrospectives,
more:     "<a href='http://www.mpdailyfix.com/the-best-brainstorming-nine-ways-to-be-a-great-brainstorm-lead/'>\
    Nine Ways To Be A Great Brainstorm Lead</a>",
durationDetail:  "40-60",
duration:    "Длительная",
stage:    "All",
suitable: "итерация, релиз, проект, интроверты"
};

all_activities[10] = {
phase:     3,
name:      "Круг вопросов",
summary:   "Участники по кругу отвечают и задают вопросы - отличный способ достичь взаимопонимания",
desc:      "Попросите группу сесть в круг. Первый участник задает вопрос соседу слева касательно \
плана действий. Например: 'Как ты считаешь, какое самое важное изменение нам следует попробовать на \
следующей итерации?'. Сосед отвечает на вопрос, а затем задает своему соседу слева вопрос, который \
либо расширяет предыдущий вопрос, либо начинает новый. И так далее по кругу, пока группа не достигнет \
взаимопонимания по вопросу, либо не закончится выделенное время. Следует пройти как минимум один круг, \
чтобы у каждого была возможность высказаться!",
source:    source_agileRetrospectives,
durationDetail:  "30+ groupsize",
duration:    "Средняя",
stage:    "Формирование, Нормирование",
suitable: "итерация, релиз, проект, интроверты"
};

all_activities[11] = {
phase:     3,
name:      "Голосование точками - Начать, Прекратить, Продолжать",
summary:   "Мозговой штурм в формате 'начать, прекратить, продолжать' и выбор лучших предложений",
desc:      "Разделите флипчарт на 3 колонки 'Начать', 'Прекратить' и 'Продолжать'. Попросите участников \
написать свои предложения в каждую из колонок - отдельное предложение на отдельном стикере. Дайте им на \
это 5 минут и попросите соблюдать тишину. Затем попросите зачитать свои предложения и повесить на флипчарт. \
Организуйте короткую дискуссию какие 20% предложений наиболее ценные. Затем попросите участников \
проголосовать точками (по 3 точки на человека). 2-3 предложения, набравшие наибольшее количество голосов, \
превращаются в план действий. \
<br><br>\
(Посмотрите интересную вариацию этого упражнения от Пауло Кароли: <a href='http://www.funretrospectives.com/open-the-box/'>'Open the Box'</a>.)",
source:    source_agileRetrospectives,
durationDetail:  "15-30",
duration:    "Средняя",
stage:    "All",
suitable: "итерация"
};

all_activities[12] = {
phase:     3,
name:      "SMART-задачи",
summary:   "Сформулируйте конкретный и измеримый план действий",
desc:      "Презентуйте группе концепцию <a href='http://ru.wikipedia.org/wiki/SMART'>SMART</a>-задач: \
Specific (конкретная), Measurable (измеримая), Attainable (достижимая), Relevant (актуальная), \
Timely (ограничена во времени). Приведите примеры SMART и НЕ-SMART задач. НЕ-SMART: 'Нужно прорабатывать \
истории перед взятием в спринт'. SMART: 'Перед взятием в спринт мы будем прорабатывать истории, обсуждая \
их вместе с Product Owner'ом каждую среду в 9:00 утра'.<br>\
Сформируйте малые группы вокруг рассматриваемых вопросов. Задача группы - определить 1-5 конкретных \
шагов для решения поставленной задачи. Попросите группы презентовать свои результаты. Все участники \
должны подтвердить, что предложенные шаги соответствуют концепции SMART. При необходимости доработайте \
и подтвердите.",
source:    source_agileRetrospectives,
durationDetail:  "20-60 groupsize",
duration:    "Средняя",
stage:    "All",
suitable: "итерация, релиз, проект"
};

all_activities[13] = {
phase:     4,
name:      "Дверь отзывов - Числа",
summary:   "Всего за несколько минут получите отзыв о том, насколько участники довольны ретроспективой", 
desc:      "Приклейте на дверь стикеры с цифрами от 1 до 5. Объясните, что циФры представляют шкалу, \
где 1 означает прекрасно или отлично, а 5 - плохо.\
Когда ретроспектива подойдет к концу, попросите всех наклеить стикер около цифры, которая по их мнению \
наиболее точно отобржает, насколько участник доволен ретроспективой.\
Стикер может быть как пустым, так и содержать комментарии или предложения по улучшению ретроспективы.", 
source:    "ALE 2011, " + source_findingMarbles,
durationDetail:  "2-3",
duration:    "Короткая",
stage:    "Формирование, Функционирование",
suitable: "итерация, большие группы"
};

all_activities[14] = {
phase:     4,
name:      "Благодарность",
summary:   "Позвольте участникам команды поблагодарить друг друга",
desc:	   "Начните выражать искренюю благодарность одному из участников.\
Похвала может оноситься к любому действию или событию, которое например способствовало в решении проблем в команде или вам лично, ... \
Затем пригласите участников присоединиться и высказать благодарность или похвалу друг другу. \
Молчите некоторое время, чтобы создать небольшое напряжение и побудить участников к действию.\
Закончите, когда молчание длиться больше 1 минуты и никто из участников больше не хочет высказаться.",
source:    source_agileRetrospectives + " who took it from 'The Satir Model: Family Therapy and Beyond'",
durationDetail:  "5-30 groupsize",
duration:    "Короткая",
stage:    "Любая",
suitable: "итерация, релиз, проект"
};

all_activities[15] = {
phase:     4,
name:      "Помагает, Мешает, Гипотеза",
summary:   "Получите конкретный отзыв о том, как вы содействуете команде",
desc:      "Подготовьте 3 флипчарта с названиями 'Помагает', 'Мешает', и 'Гипотеза' \
(предложения о том, что можно попробовать). \
Попросите участиков помочь вам развиваться в профессиональном смысле и улучшать свои навыки ведущего ретроспективы. Участники пишут\
на стикерах свои отзывы и имена, чтобы вы потом могли им задать уточняющие вопросы.",
source:    source_agileRetrospectives,
durationDetail:  "5-10",
duration:    "Средняя",
stage:    "Формирование, Бурление",
suitable: "итерация, релиз"
};

all_activities[16] = {
phase:     4, // 5 geht auch
name:      "Больше, Меньше, Так держать",
summary:   "Получите обратную связь на свое поведение как ведущего ретроспективы",
desc:      "Разделите флипчарт на 3 колонки 'Больше', 'Меньше' и 'Так держать'. \
Попросите участников скорректировать ваше поведение как ведущего ретроспективы: Записать на стикерах \
что вам следует делать больше, что следует делать меньше, и что следует оставить без изменений. \
Зачитайте и кратко обсудите полученную информацию.",
source:    "<a href='http://fairlygoodpractices.com/samolo.htm'>Fairly good practices</a>",
more:      "<a href='http://www.scrumology.net/2010/05/11/samolo-retrospectives/'>David Bland's experiences</a>",
durationDetail:  "5-10",
duration:    "Средняя",
stage:    "Формирование, Бурление",
suitable: "итерация, релиз, проект"
};

all_activities[17] = {
phase:     0,
name:      "Отзыв на Яндекс-Маркете",
summary:   "Напишите отзыв о прошедшей итерации в стиле Яндекс-Маркета",
desc:      "Попросите участников написать короткий отзыв о прошедшей итерации в формате: \
<ul>\
    <li>Заголовок</li>\
    <li>Содержание</li>\
    <li>Количество звезд по пятибальной шкале</li>\
</ul>\
Далее попросите зачитать свои отзывы. Оценки записывайте на флипчарт.<br>\
Упражнение можно расширить на всю ретроспективу добавив вопросы: что бы вы порекомендовали на \
следующую итерацию, а что бы не стали рекомендовать.",
source:    "<a href='http://blog.codecentric.de/2012/02/unser-sprint-bei-amazon/'>Christian Hei&szlig;</a>",
durationDetail:  "10",
duration:    "Длительная",
stage:    "All",
suitable: "релиз, проект"
};

all_activities[18] = {
phase:     1,
name:      "Катер / Яхта",
summary:   "Проанализируйте что двигает вас вперед, а что тянет назад",
desc:      "Нарисуйте на листе флипчарта катер с мощным мотором и большим тяжелым якорем. Попросите \
участников в тишине записать на стикерах что двигает команду вперед (мотор), а что тормозит и мешает \
(якорь). Каждая мысль на отдельном стикере. Попросите развесить стикеры на мотор и якорь соответственно. \
Зачитайте каждый и обсудите, каким образом усилить движущие и устранить сдерживающие факторы. \
<br><br> \
Вариация: Иногда на рисунок добавляют айсберг, олицетворяющий предстоящие трудности, которые команда видит \
на своем пути.",
source:    source_innovationGames + ", найдено у <a href='http://leadinganswers.typepad.com/leading_answers/2007/10/calgary-apln-pl.html'>Mike Griffiths</a>",
durationDetail:  "10-15 groupSize",
duration:    "Средняя",
stage:    "All",
suitable: "итерация, релиз"
};

all_activities[19] = {
phase:     2,
name:      "Игра в совершенство",
summary:   "Что сделает следующую итерацию совершенной (на 10 баллов из 10)?",
desc:      "Разделите флипчарт на 2 колонки: узкая колонка 'Оценка' и широкая 'Улучшения'. Каждый \
оценивает прошедшую итерацию по шкале от 1 до 10. После чего группа должна предложить улучшения, \
которые сделают следующую итерацию идеальной (10 баллов из 10).",
source:    "<a href='http://www.benlinders.com/2011/getting-business-value-out-of-agile-retrospectives/'>Ben Linders</a>",
duration:    "Средняя",
stage:    "All",
suitable: "итерация, релиз"
};

all_activities[20] = {
phase:     3,
name:      "Выжимка",
summary:   "Сведите все возможные действия к двум, которые команда возьмет в работу",
desc:      "Раздайте стикеры и маркеры. Попросите каждого записать два улучшения, которые он хочет \
попробовать на следующей итерации. Попросите писать максимально конкретно в соответствии c концепцией \
<a href='http://ru.wikipedia.org/wiki/SMART'>SMART</a>. Далее участники объединяются в пары, и каждая \
пара должна из 4-х улучшений выбрать 2 наилучших. Затем пары объединяются в группы по 4 человека и снова \
выбирают 2 из 4-х. Затем группы по 8 человек. После соберите победившие идеи и общим голосованием выберите \
финальные 2",
source:    "Lydia Grawunder & Sebastian Nachtigall",
durationDetail:  "15-30 groupSize",
duration:    "Средняя",
stage:    "All",
suitable: "итерация, релиз, проект, большие группы"
};

all_activities[21] = {
phase:     0,
name:      "Измерение температуры",
summary:   "Участники отмечают свою 'температуру' (настроение) на флипчарте",
desc:      "Подготовьте флипчарт с рисунком термометра и шкалой с отметками замерзание, температура тела и кипяток. \
Каждый участник отмечает свое настроение",
duration:    "Короткая",
stage:    "All",
source:  source_unknown
};
all_activities[22] = {
phase:     4,
name:      "Дверь отзывов - со смайликами",
summary:   "Узнайте уровень удовлетворенности с ретроспективой за минимальный срок, используя смайлики",
desc:      "Нарисуйте ':)', ':|', и ':(' на листе бумаги и прикрепите его на дверь. \
Когда заканчится ретроспектива, попросите участников, дать отзыв буквой 'X' под подходящим смайликом.",
source:    "<a href='http://boeffi.net/tutorials/roti-return-on-time-invested-wie-funktionierts/'>Boeffi</a>",
durationDetail:  "2-3",
duration:    "Короткая",
stage:    "All",
suitable: "итерация, большаяГруппа"
};
all_activities[23] = {
phase:     3,
name:      "Открытый список дел",
summary:   "Участники предлагают и берут ответственность за действия",
desc:      "Подготовте флипчарт с 3 колонками 'Что', 'Кто' и 'Когда'. \
Спросите участников одного за другим, что они хотят сделать для улучшения \
команды. Запишите действие, договоритесь о том 'когда' оно должно быть сделано и  \
попросите участника вписать своё имя. <br>\
Если кто-то предлагает действие для всей команды, то он должен договориться \
со всеми, чтобы они сами вписали своё имя.",
source:    source_findingMarbles + ", инспирированно <a href='http://lwscologne.wordpress.com/2012/05/08/11-treffen-der-limited-wip-society-cologne/#Retrospektiven'>этим списком</a>",
durationDetail:  "10-15 groupSize",
duration:    "Средняя",
stage:    "All",
suitable: "итерация, релиз, малаягруппа"
};
all_activities[24] = {
phase:     2,
name:      "Причинно-Следственная Диаграмма",
summary:   "Найти источник проблемы, происхождение которой трудно определить и приводит к бесконечным дискуссиям",
desc:      "Напишите проблему, которую вы хотите исследовать на стикер и приклейте его в середину доски. \
Анализируйте в чем конкретно состоит проблема, постоянно спрашивая 'Что следует из этого?'. \
Выясняйте первопричины спрашиваю, 'почему' (это произошло)? Записывайте ваши выводы на стикерах. \
Визуализируйте причинно-следственные связи с помощью стрелок. Каждый стикер можете иметь несколько причин и несколько следствий.<br> \
Если вы найдёте причино-следственный круг, это как правило, представляют собой хорошую базу для действий. \
Если вы можете сломать этот негативный круг, вы можете улучшить сразу очень многое.",
source:    "<a href='http://blog.crisp.se/2009/09/29/henrikkniberg/1254176460000'>Henrik Kniberg</a>",
more:      "<a href='http://finding-marbles.com/2011/08/04/cause-effect-diagrams/'>Corinna's experiences</a>",
durationDetail:  "20-60 complexity",
duration:    "Длительная",
stage:    "Бурление, Нормирование",
suitable: "релиз, проект, малаягруппа, complex"


};
all_activities[25] = {
phase:     2,
name:      "Быстрое свидание",
summary:   "Каждый участник команды подробно обсуждает одну тему с помощью серий разговоров 1 на 1",
desc:      "Каждый участник записывает одну тему, которую он хочет обсудить, например что-то, что он хочет \
изменить. Затем участники формируют пары и распределяются по комнате. Каждыя пара обсуждает две темы (по одной от каждого из участников)\
и обдумывает возможные действия - на каждую тему дается по 5 минут и темы обсуджаются по очереди. \
Через 10 минут пары расфорируются и участники создают новые пары. Так продолжаем, \
пока каждый участник не переговорит со всеми другими участниками команды. <br>\
Если количество участников в группе нечетное, то ведущий ретроспективы составляет пару, но не предлагает свою тему. \
Участник получает на обсуждеие своей темы все 10 минут.",
source:    "<a href='http://vinylbaustein.net/tag/retrospective/'>Торстен Калнин (Thorsten Kalnin)</a>",
durationDetail:  "10 perPerson",
duration:    "Длительная",
stage:    "Бурление, Нормирование",
suitable: "итерация, релиз, небольшие группы"
};
all_activities[26] = {
phase:     5,
name:      "Печенье для ретроспективы",
summary:   "Организуйте обед для команды и инициируй обсуждение предсказаний из печенья для ретроспективы.",
desc:      "Предложите команде пообедать вместе, лучше всего в китайском или азиатском кафе, чтобы оставаться &quot;в теме&quot;. \
Распределите печенье с предсказаниями. Каждый участник открывает свое печенье и все обсуждают предсказание. \
Примеры предсказаний: \
<ul>\
    <li>Что было наиболее эффективно в этой итерации и почему это было настолько успешно?</li>\
    <li>Отображает ли реальность наша диаграмма сгорания? Почему да или почему нет?</li>\
    <li>Чем ты способствуешь обществу разрботчиков в нашей компании?  Какой вклад ты еще можешь внести?</li>\
    <li>Что было в этой итерации наибольшим препятствием для команды?</li>\
</ul>\
Такое печенье можно  <a href='http://weisbart.com/cookies/'> заказать в Weisbart</a> \
либо испечь самостоятельно, если английский не родной язык для команды.",
source:    "<a href='http://weisbart.com/cookies/'>Adam Weisbart</a>",
durationDetail:  "90-120",
duration:    "Длительная",
stage:    "Функционирование, Стагнация, Расформирование",
suitable: "итерация, релиз, небольшие группы"
};
all_activities[27] = {
phase:     5,
name:      "Прогулка",
summary:   "Пойдите в ближайший парк, прогуляйтесь и просто поболтайте",
desc:      "На улице хорошая погода? Зачем оставаться в закрытом помещении, когда можно выйти на свежий воздух, наполнить свой мозг кислородом \
и новыми оригинальными идеями, отличающимися от стандартных предложений. Выйдите и прогуляйтесь в ближайший парк. \
Разговор естественным  образом сведётся к темам, связанным с работой. Это хороший способ отвлечься от рутинных дел, когда рабочий процесс налажен и все работает относительно гладко. \
Чтобы поддержать дискуссию не требуется дополнительных средств, таких как визуализация или документирование. Зрелые команды могут легко выносить на обсуждение и \
беседовать о важных темах, а так же достигать соглашений даже в такой неформальной обстановке",
source:    source_findingMarbles,
durationDetail:  "60-90",
duration:    "Длительная",
stage:    "Функционирование, Расформирование",
suitable: "итерация, релиз, небольшие группы, smoothSailing, mature"
};
all_activities[28] = {
phase:     3,
name:      "Круги и суп / Области влияния",
summary:   "Участники создают список действий в зависимости от того, как они могут влиять на ситуацию. ",
desc:      "Приготовьте флип чарт с 3 концентрическими кругами, каждый круг должен быть достаточно большим, чтобы вместить в себя несколько стикеров. \
Назовите внутренний круг 'Команда контролирует - Действие', средний 'Команда влияет - Рекомендованное действие' и самый большой 'Суп - Реакция команды', \
(В данном случае 'Суп' означает более широкую структуру, которая включает в себя команду, например сама организация, или влияет на решения команды) \
Расположите стикеры с выводами, информацией и проблемами из предыдущей фазы в соответствующие круги.<br> \
Участники записывают возможные действия, работая в парах. Предложите парам сконцентрировать свое внимания на тех проблемах, которые находятся в их круге влияния. \
Каждая пара приклеивает стикер с возможным действием около самой проблемы и представляет его команде. \
Договоритесь с помощью дискуссии или голосования, какие из действий команда испробует в ближайшее время",
source:    "<a href='http://www.futureworksconsulting.com/blog/2010/07/26/circles-and-soup/'>Диана Ларсен</a>использовала, как источник книгу Штефана Ковей 'Seven Habits of Highly Effective People' и описание Джим Баллока 'Circle of Influence and Concern'",
duration:    "Средняя",
stage:    "Формирование, Бурление, Нормирование",
suitable: "итерация, релиз, проект, stuck, immature"
};
all_activities[29] = {
phase:     5,
name:      "Поле для разговора",
summary:   "Структурированный подход к обсуждению",
desc:      "Поле для разговора выглядит как часть настольной игры. Вы можете найти тут \
<a href='http://www.softwarestrategy.co.uk/dialogue-sheets/'>несколько различных примеров(на английском языке)</a>. \
Выбирите подходящее поле, распечатайте его в максимально большом формате (желательно А1) и следуйте иструкциям.",
source:    "<a href='http://www.softwarestrategy.co.uk/dialogue-sheets/'> Allen Kelly at Software Strategy</a>",
durationDetail:  "90-120",
duration:    "Длительная",
stage:    "Любая",
suitable: "итерация, релиз, проект"
};
all_activities[30] = {
phase:     0,
name:      "Check-in - нарисуй итерацию",
summary:   "Участники рисуют определенный аспект итерации",
desc:      "Распределите карточки и маркеры. Задайте тему, например: \
<ul>\
<li>Как ты себя чувствовал(а) во время итерации?</li>\
<li>Твой самый приятный момент?</li>\
<li>Какова была самая большая проблема?</li>\
<li>Чего тебе не хватало?</li>\
</ul>\
Попросите участников нарисовать свой ответ и прикрепить рисунки на доску. \
Начните с того что участники угадывают, что означает картинки других. Потом создатели коротко объясняют свою картинку.<br> \
Метафоры открывают новые горизонты и помагают сформировать общее понимание вещей.",
source:    source_findingMarbles + ", адаптированно из идеи <a href='http://vinylbaustein.net/2011/03/24/draw-the-problem-draw-the-challenge/'>Thorsten Kalnin</a> and Olivier Gourment",
durationDetail:  "5 + 3 на человека",
duration:    "Средняя",
stage:    "Функционирование",
suitable: "итерация, релиз, проект"
};

all_activities[31] = {
phase:     0,
name:      "Оценка проекта смайликами",
summary:   "Помогает участникам выразить свои эмоции касательно проекта и выявить причины на ранней стадии",
desc:      "Нарисуйте на флипчарте смайлики с различными эмоциями. Например: \
<ul>\
    <li>шок / удивление</li>\
    <li>нервозность / стресс</li>\
    <li>беспомощность / подавленность</li>\
    <li>смущение</li>\
    <li>счастье</li>\
    <li>злость</li>\
    <li>перегруженность</li>\
</ul>\
Попросите каждого участника выбрать смайлик, который наиболее точно описывает его текущее отношение к проекту. \
При необходимости попросите прокомментировать свой выбор. Это веселый и эффективный способ вскрыть проблемы на \
ранней стадии, а затем обсудить их на последующих этапах ретроспективы.",
source:    "Andrew Ciccarelli",
durationDetail:  "10 для 5 человек",
duration:    "Короткая",
stage:    "All",
suitable: "итерация, релиз"
};

all_activities[32] = {
phase:     1,
name:      "Гордость и Сожаление",
summary:   "Чем гордятся и о чем сожалеют участники команды?",
desc:      "Разделите флипчарт на 2 колонки 'Гордость' и 'Сожаление'. Попросите участников записать на \
стикерах что вызывает чувство гордости, а что чувство сожаления. Каждая мысль на отдельном стикере. Когда \
участники закончат писать, попросите озвучить свои записи и наклеить в соответствующую колонку.<br>\
Начните групповое обсуждение задавая вопросы:\
<ul>\
    <li>Что из озвученного удивило вас?</li>\
    <li>Какие выводы можно сделать?</li>\
    <li>Что это значит для нас, как для команды?</li>\
</ul>",
source:    source_agileRetrospectives,
durationDetail:  "10-15",
duration:    "Средняя",
stage:    "All",
suitable: "итерация, релиз"
};

all_activities[33] = {
phase:     4,
name:      "Поток признания",
summary:   "Послушайте что другие говорят о вас за вашей спиной - и только хорошее!",
desc:      "Сформируйте группы по 3 человека. В каждой группе 2 человека садятся лицом друг к другу, а третий \
садится к ним спиной, следующим образом: >^<. Сидящие лицом к лицу обсуждают третьего в течении 2-х минут, и \
говорят только хорошее. Если была высказана положительная характеристика, то запрещается далее приуменьшать её. \
Например:\
<ul>\
    <li>Пётр качественно делает свою работу</li>\
    <li>Да, почти всегда его работа качественная</li>\
</ul>\
Проведите 3 раунда, чтобы каждый в группе побывал в роли слушателя.",
source:    "<a href='http://www.miarka.com/de/2010/11/shower-of-appreciation-or-talking-behind-ones-back/'>Ralph Miarka</a>",
durationDetail:  "10-15",
duration:    "Короткая",
stage:    "Нормирование, Функционирование",
suitable: "итерация, релиз, зрелаяКоманда"
};

all_activities[34] = {
phase:     1,
name:      "Agile чеклист",
summary:   "Проверьте себя на соответствие Agile чеклисту",
desc:      "Распечатайте чеклист, который лучше всего поможет команде идентифицировать зоны роста. Например:\
<ul>\
    <li><a href='http://www.crisp.se/gratis-material-och-guider/scrum-checklist'>Отличный Scrum чеклист от Хенрика Книберга</a></li>\
    <li><a href='http://finding-marbles.com/2011/09/30/assess-your-agile-engineering-practices/'>Чеклист по инженерным agile практикам</a></li>\
    <li><a href='http://agileconsortium.blogspot.de/2007/12/nokia-test.html'>Nokia тест</a></li>\
    <li><a href='http://agilemanifesto.org/iso/ru/principles.html'>12 принципов Agile манифеста</a></li>\
</ul>\
Пройдитесь с командой по чеклисту. Обсудите где вы находитесь сейчас и в правильном ли направлении двигаетесь. <br>\
Это упражнение хорошо подходит когда итерация прошла гладко без инцидентов.",
source:    source_findingMarbles,
durationDetail:  "10-25 минут в зависимости от чеклиста",
duration:    "Средняя",
stage:    "All",
suitable: "малаягруппа, итерация, релиз, проект, гладкопрошло"
};
all_activities[36] = {
phase:     2,
name:      "Вспомнить будущее",
summary:   "Представьте что ваша следующая итерация будет идеальной. Как это будет? Что вы будете делать?",
desc:      "'Представьте себе, что вы можете путешествовать во времени. Вы отправляетесь в день окончания следующей итерации и \
видите, что это была самая лучшая и самая продуктивная итерация из всех, что когда то были. \
Как бы вы это описали? Что вы там увидели бы?'. Дайте команде немного времени представить это и записать ключевые слова.  \
Затем позвольте каждому из участников описать свою версию идеальной итерации.<br>\
Пусть участники так же ответят на вопрос 'Что мы изменили, чтобы достичь такого продуктивного и успешного уровня работы в итерации?'\
Запишите ответы на карточках, чтобы использовать их в следующей фазе ретроспективы.",
source:    source_innovationGames + ", найдено на <a href='http://www.ayeconference.com/appreciativeretrospective/'>Diana Larsen</a>",
duration:    "Средняя",
stage:    "Storming",
suitable: "итерация, релиз, проект"
};
all_activities[37] = {
phase:     3,
name:      "Голосование точками - Продолжать, Прекратить, Начать",
summary:   "Мозговой штурм в формате 'продолжать, прекратить, начать' и выбор лучших предложений",
desc:      "Разделите флипчарт на 3 колонки 'Прожолжать', 'Прекратить' и 'Начать'. Попросите участников \
написать свои предложения в каждую из колонок - отдельное предложение на отдельном стикере. Дайте им на \
это 5 минут и попросите соблюдать тишину. Затем попросите зачитать свои предложения и повесить на флипчарт. \
Организуйте короткую дискуссию какие 20% предложений наиболее ценные. Затем попросите участников \
проголосовать точками (по 3 точки на человека). 2-3 предложения, набравшие наибольшее количество голосов, \
превращаются в план действий. \
source:    source_agileRetrospectives,
durationDetail:  "15-30",
duration:    "Средняя",
stage:    "All",
suitable: "итерация"
};
all_activities[38] = {
phase:     3,
name:      "Голосование точками - хорошо работает, необходимо изменить",
summary:   "Мозговой штурм в формате, что сработало хорошо и что необходимо изменить. Выбор лучших предложений.",
desc:      "Повесьте 2 флипчарта с названиями 'хорошо работает' и 'необходимо изменить' соответственно. \
Попросите участников написать свои предложения для каждой из категорий - \
отдельное предложение на отдельном стикере. Дайте им на это несколько минут и попросите соблюдать тишину. \
Затем попросите зачитать свои предложения и повесить на соответствующий флипчарт. \
Организуйте короткую дискуссию какие 20% предложений наиболее ценные.  Затем попросите участников проголосовать точками (по 3 точки на человека). \
2-3 предложения, набравшие наибольшее количество голосов, превращаются в план действий.",
source:    source_agileRetrospectives,
durationDetail:  "15-30",
duration:    "Средняя",
stage:    "All",
suitable: "итерация"
};
all_activities[39] = {
phase:     4,
name:      "Плюс & Дельта",
summary:   "Каждый участник записывает, что ему понравилось и чтобы ему хотелось изменить в ретроспективе",
desc:      "Подготовьте флипчарт с двумя колонками. Назовите их соотвественно 'Плюс' и 'Дельта'. \
Попросите каждого из участников команды записать один момент ретроспективы, который особенно понравился\
и второй, который хотелось бы изменить (записать надо на двух разных карточках). Прикрепите карточки на флипчарте, \
то что понравилось в колонке 'Плюс' и соответственно, что нужно изменить, в колонке 'Дельта'.  Просмотрите все карточки и \
уточните, если что-то непонятно. В случае, если некоторые пожелания противоречат друг другу, обратите особое внимание на эти карточки,\
и определите мнение большинства членов команды по каждому конкретному пожеланию.",
source:    "<a href='http://agileretrospectivewiki.org/index.php?title=Weekly_Retrospective_Simple_%2B_delta'>Rob Bowley</a>",
durationDetail:  "5-10",
duration:    "Средняя",
stage:    "Любая",
suitable: "релиз, проект"
};
all_activities[40] = {
phase:     2,
name:      "Скамейка в парке",
summary:   "Обсуждение в группе с разным составом участников",
desc:      "Расположите минимум 4 и максимум 6 стульев так, чтобы они были направлены в группу и визуально составляли 'скамейку'. \
Объясните правила: \
		<ul>\
    <li>Займи место на 'скамейке', если ты хочешь участвовать в обсуждении</li>\
    <li>Один стул всегда должен быть свободным</li>\
    <li>Если участник занял последние место на 'скамейке', кто-то другой должен освободить свое место и вернутся в общую группу</li>\
</ul>\
Начните обсуждение на 'скамейке' и высказывайте вслух идеи или моменты, что сработало хорошо или чему вы научились в предыдущей итерации. \
Дождитесь пока кто-нибудь не присоединится.\
Закончите упражнение, когда дискуссия подойдет к концу. \
<br>Лучше всего это упражнение подходит для группы из 10-25 человек.",
source:    "<a href='http://www.futureworksconsulting.com/blog/2010/08/24/park-bench/'>Diana Larsen</a>",
durationDetail:  "15-30",
duration:    "Средняя",
stage:    "All",
suitable: "релиз, проект, большие группы"
};