export default class Spell
{
    cooldown: number;
    range: number;
    manaCost: number;

    spellName: string = 'undefined';
    //spellOwner: entity;
    spellIcon: string;

    onCastEffects: IOnCastEffect[];
    onHitEffects: IOnHitEffect[];

    aimer //SkillShot, PointNClick, CursorPosition, SelfAura, SelfOriginCast 

    private timeSinceLastCast: number = 0;
    private remainingCooldown: number = 0;

    
    public onCast(): boolean
    {
        if(this.remainingCooldown == 0)
            {
                if(this.castSpell())
                    {
                        this.timeSinceLastCast = Date.now();
                        return true;
                    }
            }
        return false;
    }

    private castSpell(): boolean
    {
        this.onCastEffects.forEach(onCastEffect =>  
        {
            //onCastEffect.onCast(aimer.castPosition, owner.direction);
        });
        return true;
    }



    //public takePlayerCursorPosition(cursorPosition): boolean
    //{
    //    return aimer.takePlayerCursorPosition(cursorPosition);
    //}

    //public enemyAim(target: playerEntity): boolean
    //{
    //    return aimer.enemyAim(target);
    //}

    public addOnHitAction(onHitEffect: IOnHitEffect)
    {
        this.onHitEffects.push(onHitEffect);
    }

    public addOnCastAction(onCastEffect: IOnCastEffect)
    {
        this.onCastEffects.push(onCastEffect);
    }


    public inInventoryUpdate(): void
    {
    }

    public equipSpell(): void
    {

    }

    public unequipSpell(): void
    {

    }
    

}
