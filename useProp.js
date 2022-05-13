async function useProps (prop) {
    var p = ac.arr.propDetail[prop];
    //outlier bug check, if there is negative number of item
    if(ac.arr.propNum[prop]<0){
      ac.arr.propNum[prop] = 0;
      if(ac.arr.propNum[i] === 0)
      {
        while(i<100)
        {
          n = i+1;
          ac.arr.propDetail[i] = ac.arr.propDetail[n];
          ac.arr.propType[i] = ac.arr.propType[n];
          ac.arr.propNum[i] = ac.arr.propNum[n];
          ac.arr.propDescribe[i] = ''.concat(ac.arr.propDescribe[n]);
          ac.arr.propName[i] = ''.concat(ac.arr.propName[n]);
          i = i+1;
        }
  
      }
    }else{
    
    if(p === 1){ //Attack plus skill book
      ac.var.ATK+=30;
      await ac.sysDialogOn({
        content: `【Attack+30】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
    
    }else if(p === 2){ //jewelry
    // 50% of getting real pill, and 50% chance getting feak pill which reduce 2 point Health
      ac.var.randNum = await ac.random({ min: 0, max: 1 });
      if(ac.var.randNum===1){
        ac.var.Beauty+=10;
      }else{
        ac.var.Health-=2;
        await ac.sysDialogOn({
        content: `【Health-2】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
      }  

    }else if(p === 3){ //Attack plus skill book
      ac.var.ATK+=50;
      await ac.sysDialogOn({
        content: `【Attack+50】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });

    }else if(p === 4){ //Attack plus skill book
      ac.var.ATK+=20;
      await ac.sysDialogOn({
        content: `【Attack+20】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });

    }else if(p === 5){ //jewelry
      ac.var.Beauty+=10;
      await ac.sysDialogOn({
        content: `【Beauty+10】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });

    }else if(p === 6){ //jewelry
      ac.var.Beauty+=15;
      await ac.sysDialogOn({
        content: `【Beauty+15】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });

    }else if(p === 7){ //jewelry
      ac.var.Beauty+=4;
      await ac.sysDialogOn({
        content: `【Beauty+4】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });

    }else if(p === 8){ //jewelry
      ac.var.Beauty+=25;
      await ac.sysDialogOn({
        content: `【Beauty+25】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });

    }else if(p === 9){ //jewelry
      ac.var.Beauty+=50;
      await ac.sysDialogOn({
        content: `【Beauty+50】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });

    }else if(p === 10){ //health plus item
      ac.var.Health++;
      await ac.sysDialogOn({
        content: `【Health+1】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });

    }else if(p === 11){ //health plus item
      ac.var.Health++;
      await ac.sysDialogOn({
        content: `【Health+1】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });

    }else if(p === 12){ //HP plus item
      ac.var.randNum = await ac.random({ min: 0, max: 1 });
      if(ac.var.randNum===1){
        ac.var.HP+=30;
        await ac.sysDialogOn({
        content: `【HP+30】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
      }else{
        ac.var.Health-=2;
        await ac.sysDialogOn({
        content: `【Health-2】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
      }  

    }else if(p === 13){//InnerStrength plus item
      ac.var.randNum = await ac.random({ min: 0, max: 1 });
      if(ac.var.randNum===1){
        ac.var.InnerStrength+=20;
        await ac.sysDialogOn({
        content: `【InnerStrength+20】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
      }else{
        ac.var.Health-=2;
        await ac.sysDialogOn({
        content: `【Health-2】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
      }  

    }else if(p === 14){ //HP plus item
      ac.var.randNum = await ac.random({ min: 0, max: 1 });
      if(ac.var.randNum===1){
        ac.var.HP+=40;
        await ac.sysDialogOn({
        content: `【HP+40】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
      }else{
        ac.var.Health-=2;
        await ac.sysDialogOn({
        content: `【Health-2】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
      }  
    }
    else if(p === 15){ //health plus item
      ac.var.randNum = await ac.random({ min: 0, max: 1 });
      if(ac.var.randNum===1){
        ac.var.Health+=5;
            await ac.sysDialogOn({
        content: `【Health+5】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
      }else{
        ac.var.Health-=2;
            await ac.sysDialogOn({
        content: `【Health-2】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
      }  
    }
    else if(p === 16){
      ac.var.randNum = await ac.random({ min: 0, max: 1 });
      if(ac.var.randNum===1){
        ac.var.Luck+=2;
            await ac.sysDialogOn({
        content: `【Luck+2】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
      }else{
        ac.var.Health-=2;
            await ac.sysDialogOn({
        content: `【Health-2】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
      }  
    }
    else if(p === 17){
        ac.var.randNum = await ac.random({ min: 0, max: 1 });
        if(ac.var.randNum===1){
          ac.var.HP+=50;
          await ac.sysDialogOn({
          content: `【HP+50】`,
          id: 324712,
          hasRoleName: false,
          hasBg: true,
          hasRoleAvatar: false,
          roleName: `角色名`,
          roleAvatarResId: '$1528927',
        });
        }else{
          ac.var.Health-=2;
          await ac.sysDialogOn({
          content: `【Health-2】`,
          id: 324712,
          hasRoleName: false,
          hasBg: true,
          hasRoleAvatar: false,
          roleName: `角色名`,
          roleAvatarResId: '$1528927',
        });
        }  
      }
  else if(p === 19){
        ac.var.Health+=1;
      await ac.sysDialogOn({
        content: `【Health+1】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
    }
  else if(p === 20){
        ac.var.Health+=1;
          await ac.sysDialogOn({
        content: `【Health+1】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
    }
  else if(p === 21){
        ac.var.Health+=1;
          await ac.sysDialogOn({
        content: `【Health+1】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
    }
  else if(p === 22){
        ac.var.Health+=1;
          await ac.sysDialogOn({
        content: `【Health+1】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
    }
  else if(p === 23){
        ac.var.Health+=2;
          await ac.sysDialogOn({
        content: `【Health+2】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
    }
  else if(p === 24){
        ac.var.Health+=2;
          await ac.sysDialogOn({
        content: `【Health+2】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
    }
  else if(p === 25){
        ac.var.Health+=2;
          await ac.sysDialogOn({
        content: `【Health+2】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
    }
  else if(p === 26){
        ac.var.Health+=2;
          await ac.sysDialogOn({
        content: `【Health+2】`,
        id: 324712,
        hasRoleName: false,
        hasBg: true,
        hasRoleAvatar: false,
        roleName: `角色名`,
        roleAvatarResId: '$1528927',
      });
  
    }

  var i = prop;
  var n = i+1;
  //use prop
  ac.arr.propNum[i]-=1;
  //if there is 0 prop in bag, clean the prop from bag
  if(ac.arr.propNum[i] === 0)
      {
        while(i<100)
          {
            n = i+1;
            ac.arr.propDetail[i] = ac.arr.propDetail[n];
            ac.arr.propType[i] = ac.arr.propType[n];
            ac.arr.propNum[i] = ac.arr.propNum[n];
            ac.arr.propDescribe[i] = ''.concat(ac.arr.propDescribe[n]);
            ac.arr.propName[i] = ''.concat(ac.arr.propName[n]);
            i = i+1;
          }
        
      }
      
    }
    
    
  }