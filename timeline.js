async function timeLine() {
//simulation timeline controller
  ac.var.RandEventOccur=0;

  //reduce action point after calling this function
  ac.var.Actpoint = ac.var.Actpoint - 1;

  //player's purchase check and send
  await order_check(''); 

  //end of the date update
  if (ac.var.Actpoint <= 0) {

    ac.var.gameDate = ac.var.gameDate + 1;
    ac.var.Actpoint = 7;

    //rumor mechanic update
    ac.var.rumor++;

    //bank mechanic
    if(ac.var.constProp > ac.var.saving){
      ac.var.constProp = ac.var.saving;
    }
  }

  //end of the month update
  if (ac.var.gameDate > 4) {
     ac.var.saving = ac.var.constProp*1.03;
     ac.var.gameMonth = ac.var.gameMonth + 1;
     ac.var.gameDate = ac.var.gameDate - 4;
     ac.var.每月更新 = 0;

     //update ranking
     await caiquan();
     //update vote benefits
     await checkVote('');
     //update loan
     await checkLoan('');
  
    }

    //end of game year update
    if (ac.var.gameMonth > 12) {
        ac.var.gameYear = ac.var.gameYear + 1;
        ac.var.gameMonth = ac.var.gameMonth - 11;
        ac.var.age = ac.var.age + 1;
        
        //main storyline triggered
        if(ac.var.gameYear === 27){
            await ac.jump({
                plotID: 1387046,
                transition: ac.SCENE_TRANSITION_TYPES.normal,
            });
        }

    }

    //alter season (four seasons)
    if (ac.var.gameMonth >=3&&ac.var.gameMonth <6) {
        ac.var.游戏季 = '春';
    }else if(ac.var.gameMonth >=6&&ac.var.gameMonth <9){
        ac.var.游戏季 = '夏';
    }else if(ac.var.gameMonth >=1&&ac.var.gameMonth <3){
        ac.var.游戏季 = '冬';
    }else{
        ac.var.游戏季 = '秋';
    }
  
    
    //This is here to make sure people reach update point prior to update would not lose important message
    if (ac.var.gameMonth === 1&&ac.var.gameDate === 1&&ac.var.Actpoint === 2&&ac.var.gameYear === 27) {
        ac.arr.可攻略人物遇见与否[1]=1; //if met NPC[1] 
        ac.arr.可攻略人物姓名[1] = '陆长青'; //assign NPC[1] name
        ac.arr.可攻略介绍[1] = '青城派掌门，后起之秀，逸群之才。'; //assing intro of NPC[1]

        //announce that several NPCs' room are available to visit
        await ac.sysDialogOn({ 
            content: `【青城派已入住迎松楼，记得去拜访他们哦】`,
            id: 324712,
            hasRoleName: false,
            hasBg: true,
            hasRoleAvatar: false,
            roleName: `角色名`,
            roleAvatarResId: '$1528927',
        });
    }

    /* Reach Ending */

    /* Health too low
     * if have saving pill, gain 30 point health
     * else game end. */
    if (ac.var.Health < 30&&ac.var.回灵珠 === 0) {
        await ac.jump({
            plotID: 1495137,
            transition: ac.SCENE_TRANSITION_TYPES.normal,
        });
    }else if (ac.var.Health < 30&ac.var.回灵珠 >=1) {
        ac.var.回灵珠-=1;
        await ac.sysDialogOn({
            content: `【监测到有回灵珠，体质恢复30】`,
            id: 324712,
            hasRoleName: false,
            hasBg: true,
            hasRoleAvatar: false,
            roleName: `角色名`,
            roleAvatarResId: '$1528927',
        });
        ac.var.Health+=30;
    }
  
    /* Inner demon too high
     * if have saving pill, reduce 200 point inner demon
     * else game end. */
    if (ac.var.主角心魔 >= 999&&ac.var.回灵珠 === 0) {
        await ac.jump({
            plotID: 1495139,
            transition: ac.SCENE_TRANSITION_TYPES.normal,
        });

    } else if (ac.var.主角心魔 >= 999&&ac.var.回灵珠 >=1) {
        ac.var.回灵珠-=1;
        await ac.sysDialogOn({
            content: `【监测到有回灵珠，心魔恢复200】`,
            id: 324712,
            hasRoleName: false,
            hasBg: true,
            hasRoleAvatar: false,
            roleName: `角色名`,
            roleAvatarResId: '$1528927',
        });
        ac.var.主角心魔-=200;

    }

    //special events
    if (ac.var.gameMonth === 3&&ac.var.Actpoint === 1&&ac.var.gameDate === 4&&ac.var.gameYear === 27) {

        await ac.jump({
            plotID: 1512050,
            transition: ac.SCENE_TRANSITION_TYPES.normal,
        });

    }
    if (ac.var.gameMonth === 4&&ac.var.Actpoint === 5&&ac.var.gameDate === 2&&ac.var.gameYear === 27) {

        await ac.jump({
            plotID: 1542529,
            transition: ac.SCENE_TRANSITION_TYPES.normal,
        });

    }
    if (ac.var.gameMonth === 6&&ac.var.Actpoint === 5&&ac.var.gameDate === 2&&ac.var.gameYear === 27) {

        await ac.jump({
            plotID: 1607511,
            transition: ac.SCENE_TRANSITION_TYPES.normal,
        });

    }
    //send preorder gift at the start of the year
    if (ac.var.gameMonth === 1&&ac.var.gameDate === 1&&ac.var.Actpoint === 2&&ac.var.gameYear >= 27&&ac.var.gameYear < 31) {
        await preorder('');
    }

    if (ac.var.gameMonth === 6&&ac.var.Actpoint === 3&&ac.var.gameDate === 4&&ac.var.gameYear === 27) {

        await ac.jump({
            plotID: 1722444,
            transition: ac.SCENE_TRANSITION_TYPES.normal,
        });

    }
    if (ac.var.gameMonth === 4&&ac.var.Actpoint === 6&&ac.var.gameDate === 1&&ac.var.gameYear === 26) {
  
        await ac.display({
            plotID: 1441237,
            transition: ac.SCENE_TRANSITION_TYPES.normal,
            duration: 1000,
        });
        ac.var.Actpoint = ac.var.Actpoint - 1;

    }
    if (ac.var.gameMonth === 9&&ac.var.Actpoint === 6&&ac.var.gameDate === 1&&ac.var.gameYear === 26) {

        await ac.display({
            plotID: 1456621,
            transition: ac.SCENE_TRANSITION_TYPES.normal,
            duration: 1000,
        });
        ac.var.Actpoint = ac.var.Actpoint - 1;

    }
    if (ac.var.gameMonth === 2&&ac.var.Actpoint === 5&&ac.var.gameDate === 1&&ac.var.gameYear === 27) {

        await ac.display({
            plotID: 1429965,
            transition: ac.SCENE_TRANSITION_TYPES.normal,
            duration: 1000,
        });
        ac.var.Actpoint = ac.var.Actpoint - 1;

    }
  
    if(ac.var.gameMonth===2&&ac.var.Actpoint===3&&ac.var.gameDate===1&&ac.var.gameYear === 26){
        await ac.sysDialogOn({
            content: `是否观看新年特殊剧情？`,
            id: 324712,
            hasRoleName: false,
            hasBg: true,
            hasRoleAvatar: false,
            roleName: `角色名`,
            roleAvatarResId: '$1528927',
        });
            async function skip() {

            }
            async function seesee() {
                await ac.jump({
                plotID: 1166982,
                transition: ac.SCENE_TRANSITION_TYPES.normal,
                });

            }
        await ac.createOptionGroup({
            name: 'textOptionGroup43',
             defaultComposition: false,
            index: 0,
            inlayer: 'window',
            spacing: 27,
            clickAudio: {
                resId: '$532507',
                vol: 80,
            },
            optionGroup: [{
                textContent: `观看`,
                nResId: '$13090576',
                sResId: '$13090593',
                x: 219,
                y: 373,
                clickFunc: seesee,
            }, {
             textContent: `跳过`,
                nResId: '$13090576',
                sResId: '$13090593',
                x: 219,
                y: 309,
                clickFunc: skip,
              }],
        });
    
    }

    //start of the date, start in the bedroom
    if (ac.var.Actpoint >= 7) {
        await ac.jump({
            plotID: 928573,
            transition: ac.SCENE_TRANSITION_TYPES.fade,
            duration: 1000,
         });

    }

    

}
