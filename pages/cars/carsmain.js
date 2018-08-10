// pages/carc/carcmain.js
var utils = require("../../utils/util.js")

var selectedOpt = {};

var items = [
  {
    title: "人际关系", idx: 0, 
    subitems: [
      { desc: "与年龄相当；与年龄相符的害羞、自卫及表示不同意。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：缺乏一些眼光接触，不愿意，回避，过分害羞，对检查者反应有轻度缺陷。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：回避人，要使劲打扰他才能得到反应。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：强烈地回避，儿童对检查者很少反应，只有检查者强烈地干扰，才能产生反应。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "模仿(词和动作)", idx: 1, 
    subitems: [
      { desc: "与年龄相当：与年龄相符的模仿。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：大部分时间都模仿，有时激动，有时延缓。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：在检查者极大的要求下有时模仿。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：很少用语言或运动模仿他人。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "情感反应", idx: 2, 
    subitems: [
      { desc: "与年龄相当：与年龄、情境相适应的情感反应--愉快不愉快，以及兴趣，通过面部表情姿势的变化来表达。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：对不同的情感刺激有些缺乏相应的反应，情感可能受限或过份。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：不适当的情感的示意，反应相当受限或过份，或往往与刺激无关。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：极刻板的情感反应，对检查者坚持改变的情境很少产生适当的反应。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "躯体运用能力", idx: 3, 
    subitems: [
      { desc: "与年龄相当：与年龄相适应的利用和意识。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：躯体运用方面有点特殊--某些刻板运动，笨拙，缺乏协调性。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：有中度特殊的手指或身体姿势功能失调的征象，摇动旋转，手指摆动，脚尖走。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：如上述所描述的严重而广泛地发生。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "与非生命物体的关系", idx: 4, 
    subitems: [
      { desc: "与年龄相当：适合年龄的兴趣运用和探索。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：轻度的对东西缺乏或不适当地使用物体，象婴儿一样咬东西，猛敲东西，或者迷恋于物体发出的吱吱叫声或不停地开灯、关灯。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：对多数物体缺乏兴趣或表现有些特别，如重复转动某件物体，反复用手指尖捏起东西，旋转轮子或对某部分着迷。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：严重的对物体的不适当的兴趣，使用和探究，如上边发生的情况频繁的发生，很难使儿童分心。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "对环境变化的适应", idx: 5, 
    subitems: [
      { desc: "与年龄相当：对改变产生与年龄相适应的反应。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：对环境改变产生某些反应，倾向维持某一物体活动或坚持相同的反应形式。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：对环境改变出现烦躁、沮丧的征象，当干扰他时很难被吸引过来。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：对改变产生严重的反应，假如坚持把环境的变化强加给他，儿童可能逃跑。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "视觉反应", idx: 6, 
    subitems: [
      { desc: "与年龄相当：适合年龄的视觉反应，与其他感觉系统是整合方式。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：有时必须提醒儿童去注意物体，有时全神贯注于'镜象'，有的回避眼光接触，有的凝视空间，有的着迷于灯光。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：经常要提醒他们正在干什么，喜欢观看光亮的物体，即使强迫他，也只有很少的眼光接触，盯着看人，或凝视空间。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：对物体和人的广泛严重的视觉回避，着迷于使用'余光'。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "听觉反应", idx: 7, 
    subitems: [
      { desc: "与年龄相当：适合年龄的听觉反应。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：对听觉刺激或某些特殊声音缺乏一些反应，反应可能延迟，有时必须重复声音刺激，有时对大的声音敏感，或对此声音分心。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：对听觉不构成反应，或必须重复数次刺激才产生反应，或对某些声音敏感(如很容易受惊，捂上耳朵等)。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：对声音全面回避，对声音类型不加注意或极度敏感。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "近处感觉反应", idx: 8, 
    subitems: [
      { desc: "与年龄相当：对疼痛产生适当强度的反应，正常触觉和嗅觉。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：对疼痛或轻度触碰，气味、味道等有点缺乏适当的反应，有时出现一些婴儿吸吮物体的表现。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：对疼痛或意外伤害缺乏反应，比较集中于触觉、嗅觉、味觉。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：过度的集中于触觉的探究感觉而不是功能的作用(吸吮、舔或磨擦)，完全忽视疼痛或过分地作出反应。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "焦虑反应", idx: 9, 
    subitems: [
      { desc: "与年龄相当：对情境产生与年龄相适应的反应，并且反应无延长。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：轻度焦虑反应。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：中度焦虑反应。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：严重的焦虑反应，可能儿童在会见的一段时间内不能坐下，或很害怕，或退缩等。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "语言交流", idx: 10, 
    subitems: [
      { desc: "与年龄相当：适合年龄的语言。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：语言迟钝，多数语言有意义，但有一点模仿语言。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：缺乏语言或有意义的语言与不适当的语言相混淆(模仿言语或莫名其妙的话)。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：严重的不正常言语，实质上缺乏可理解的语言或运用特殊的离奇的语言。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "非语言交流", idx: 11, 
    subitems: [
      { desc: "与年龄相当：与年龄相符的非语言性交流。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：非语言交流迟钝，交往仅为简单的或含糊的反应，如指出或去取他想要的东西。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：缺乏非语言交往，儿童不会利用或对非语言的交往作出反应。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：特别古怪的和不可理解的非语言的交往。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "活动很大", idx: 12, 
    subitems: [
      { desc: "与年龄相当：正常活动水平, 不多动亦不少动。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：轻度不安静或有轻度活动缓慢，但一般可控制。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：活动相当多，并且控制其活动量有困难，或者相当不活动或运动缓慢，检查者很频繁地控制或以极大努力才能得到反应。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：极不正常的活动水平，要么是不停，要么是冷淡的，很难得到儿童对任何事件的反应，差不多不断地需要大人控制。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "智力功能", idx: 13, 
    subitems: [
      { desc: "与年龄相当：正常智力功能, 无迟钝的证据。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：轻度智力低下, 技能低下表现在各个领域。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：中度智力低下, 某些技能明显迟钝，其他的接近年龄水平。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：智力功能严重障碍, 某些技能表现迟钝，另外一些在年龄水平以上或不寻常。", itemvalue: "4", subidx: 6},
    ] 
  },
  {
    title: "总的印象", idx: 14, 
    subitems: [
      { desc: "与年龄相当：不是孤独症。", itemvalue: "1", subidx:0},
      { desc: "介于之间                           ", itemvalue: "1.5", subidx: 1 },
      { desc: "轻度异常：轻微的或轻度孤独症。", itemvalue: "2", subidx: 2 },
      { desc: "介于之间                           ", itemvalue: "2.5", subidx: 3 },
      { desc: "中度异常：孤独症的中度征象。", itemvalue: "3", subidx: 4},
      { desc: "介于之间                           ", itemvalue: "3.5", subidx: 5},
      { desc: "重度异常：非常多的孤独症征象。", itemvalue: "4", subidx: 6},
    ] 
  }
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    qitems: items
  },
  onShareAppMessage: function (e) {
    return {
      title: utils.shareTitle,
      desc: utils.shareDesc,
      path: utils.sharePath
    }
  },
  onSelectChkBox: function (e) {
    var selectID = e.currentTarget.id;
    selectedOpt[selectID] = e.detail.value
  },
  onGetResult: function (e) {
    if (count(selectedOpt) != items.length) {
      wx.showToast({
        title: '请回答所有项目',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    var total = 0, iMoreThenThree=0;
    for (var i in selectedOpt) {
      var tmp = parseFloat(selectedOpt[i], 10);
      if (tmp >= 3)
        iMoreThenThree++;
      total += tmp;
    }

    var msg = "";
    if (total < 30)
      msg = "正常儿童"
    else if (total <  36)
      msg = "轻-中度自闭症"
    else
      msg = "严重自闭症"

    this.setData({
      theresult: msg + '. 总计' + total + '分, 其中>=3分的有' + iMoreThenThree + '项',
      getresult: true
    });
  }
})

function count(obj) {
  var t = typeof obj;
  if (t == 'string') {
    return obj.length;
  } else if (t == 'object') {
    var n = 0;
    for (var i in obj) {
      n++;
    }
    return n;
  }
  return 0;
}