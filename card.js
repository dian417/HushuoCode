async function cardSingle () {

    //text style
    await ac.createStyle({
      name: 'style7',
      font: '思源黑体',
      bold: false,
      italic: false,
      fontSize: 22,
      color: '#465b82',
      speed: 9,
    });

    var CardProbability=[];
    var CardName=[];
    var i=0;
    var account = 0;
    var card = 0;
    //different probability regarding each card
    CardProbability=[20,20,10,5,2];
    CardName=['R-Ruyi','R-demon','SR-Ze','SSR-Lu','SP-Yingying'];

    //get the total probability in the array
    while(i < CardProbability.length){
        account = account+CardProbability[i];
        i+=1;
    }

    i=0;

    //get the probability number of current attemp
    card = await ac.random({ min: 0, max: account });

    //find the probability number for its corresponding card
    account = CardProbability[0];
    while (account<card){
        i+=1;
        account = account+CardProbability[i];
    }
    ac.var.result = i;

    //add card into bag
    ac.arr.cardOwned[ac.var.result] = ac.arr.cardOwned[ac.var.result] + 1;

    //display card with special effects
    await ac.createPicDisplay({
      name: 'picDisplay4',
      index: 3,
      inlayer: 'window',
      picGroup: [{
        resId: '$12737470',
        condition: () => ac.var.result === 0,
      }, {
        resId: '$12737471',
        condition: () => ac.var.result === 1,
      }, {
        resId: '$12867963',
        condition: () => ac.var.result === 2,
      }, {
        resId: '$12867962',
        condition: () => ac.var.result === 3,
      }, {
        resId: '$12868014',
        condition: () => ac.var.result === 4,
      }],
      pos: {
        x: 639,
        y: 359,
      },
      size: {
        width: 835,
        height: 1253,
      },
      anchor: {
        x: 50,
        y: 50,
      },
      opacity: 100,
      scale: 35,
      visible: false,
      verticalFlip: false,
      horizontalFlip: false,
    });

    ac.show({
      name: 'picDisplay4',
      effect: 'fadein',
      duration: 1000,
      canskip: false,
    });

  ac.var.wordOutput = ''.concat('恭喜获得',CardName[ac.var.result]);
    await ac.createStyle({
      name: 'style5',
      font: '华康魏碑W7',
      bold: false,
      italic: false,
      fontSize: 30,
      color: '#ce7324',
      speed: 10,
    });
    await ac.createVarDisplay({
      name: 'varDisplay7',
      index: 3,
      inlayer: 'window',
      visible: true,
      style: 'style5',
      pos: {
        x: 649,
        y: 592,
      },
      size: {
        width: 596,
        height: 52,
      },
      direction: ac.TEXT_DIRECTION_TYPES.horizontal,
      halign: ac.HALIGN_TYPES.middle,
      valign: ac.VALIGN_TYPES.top,
      anchor: {
        x: 50,
        y: 50,
      },
      bindFunc: () => ac.var.wordOutput,
    });
    await ac.delay({
      time: 2000,
    });
  }