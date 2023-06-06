import GyufasDoboz from "./GyufasDoboz.js";
import Mezo from "./Mezo.js";

/*
 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8
*/

class Jatekter 
{
    #tablaElem;

    #kor;
    #kattintottMezo;

    static mindenLepes=[[],[],[]]
    static #gyufasDobozok = [];
    #mezoLista = [];
    #gepLepesei = [];

    static{
        Jatekter.#rekurzivKereses([-1,-1,-1,0,0,0,1,1,1],0, 1)
        Jatekter.#gyufasDobozok=[[],[],[]]

        for (let ix = 0; ix < this.mindenLepes.length; ix++) {
            Jatekter.mindenLepes[ix].forEach(element => {
                function multiDimensionalUnique(arr) {
                    var uniques = [];
                    var itemsFound = {};
                    for(var i = 0, l = arr.length; i < l; i++) {
                        var stringified = JSON.stringify(arr[i]);
                        if(itemsFound[stringified]) { continue; }
                        uniques.push(arr[i]);
                        itemsFound[stringified] = true;
                    }
                    return uniques;
                }
                Jatekter.#gyufasDobozok[ix].push(new GyufasDoboz(element.allas,multiDimensionalUnique(element.lepesek)))    
            });
        }
        
        $("#betolt").fadeTo(1000, 0, function(){
            $(this).hide() }); 
        }
    
    constructor()
    {
        this.#tablaElem = $("#tabla"); 

        this.#kor = 1;
        this.#mezoLista = [];
        for (let i = 0; i < 9; i++)
        {
            this.#mezoLista.push(new Mezo("#tabla", i));
        }
        this.#kattintottMezo = null;
        this.#gepLepesei = [];

        
    }

    //how to use:
    //从前有一个可爱的公主。 但是她对她有一种可怕的结界，只能 被爱的初吻打破。 她被锁在一座城堡里，城堡里有一团可怕的喷火 龙。 许多勇敢的刀匠企图将她从这个可怕的监狱中解救出来， 但不普遍。 她在最高的最高房间的龙穴中等待 塔为她的真爱和真爱的初吻。 {笑} 那样的事情永远都会发生。 {纸生锈，马桶冲洗} 的负担- 有人曾经告诉我，世界将使我崩溃 我不是棚子里最犀利的工具 她的手指和拇指看起来有点傻 额头上呈“ L”形 岁月开始，他们不会停止 美联储遵守规则，如履薄冰 不以娱乐为生没有道理 您的大脑变得聪明，但头脑却变得愚蠢 要做的事情太多了 那么，把后街变成羚羊怎么了？ 你永远不会知道你是否不去 不发光就永远不会发光 嘿，你现在是全明星 开始游戏，继续玩 嘿，你现在是摇滚明星 开始演出，获得报酬 而所有闪闪发光的都是黄金 只有射击的星星才能打破霉菌 这是一个很酷的地方，他们说天气变冷了。 您已被捆绑，但要等到年纪大了 但是流星们乞求不同 从卫星图片上的洞来看 我们滑冰的冰开始很稀薄 水变暖了，所以你最好去游泳 我的世界着火了 你的怎么样 那就是我喜欢的方式，我永远不会感到无聊 嘿，你现在是全明星 {大喊}开始游戏，继续玩嘿，你现在是摇滚明星开始演出，获得报酬而所有闪闪发光的都是黄金只有射击的星星才能打破霉菌{贝尔奇}走！走！{记录暂存}走。去吧嘿，你现在是全明星开始游戏，继续玩嘿，你现在是摇滚明星开始演出，获得报酬而所有闪闪发光的都是黄金只有射击的星星才能打破霉菌-认为在里面吗？-好吧。我们去取得它！哇坚持，稍等。你知道那件事对你有什么作用吗？是的，因为它是面包，它会磨碎你的骨头。{笑}-是的，实际上，那是有好处的。现在，食人魔--情况更糟。他们会用您刚剥皮的皮肤做成西装。-没有！他们会刮你的肝脏。从眼睛里挤出果冻！实际上，在吐司面包上这是相当不错的。-背部！回来，野兽！背部！我警告你！{喘气}-对。{咆哮}{大喊}{咆哮}{耳语}这是您逃跑的部分。{喘气}{笑}{笑}别出来！“想要。童话般的生物。”{感叹}{人的声音}好的。这个饱了。-把它拿开！{Gasps}-继续前进。来吧！起床！-下一个！-给我！你的战斗结束了。那是给女巫20块银。下一个！-起床！来吧！-二十块。{颠簸}-坐在那儿！-保持安静！{哭泣}-这个笼子太小了。-拜托，不要让我上交。我再也不会固执了。我可以改变。请！再给我一次机会！-哦闭嘴。-哦！-下一个！-你有什么？-这个小木偶。我不是人偶我是一个真正的男孩。-拥有玩具的先令为五先令。把它拿开。-父亲，拜托！不要让他们这样做！-帮我！-下一个！你有什么？好吧，我有一只会说话的驴。{Grunts}-对。好吧，如果可以证明的话，这十先令就可以了。-哦，快点，小家伙。-好？-哦，他只是--他有点紧张。他真的是个a不休的人。说话，你呆呆的呆呆---而已。我已经听够了。守卫！不，不，他说话！他是这样的。我可以说话。我喜欢说话。我是你见过的最该死的东西。-让她走出我的视线。-不，不！我发誓！哦!他会说话！

    static #rekurzivKereses(tomb, nth, kor){
        if(nth<tomb.length){
            let babu=tomb[nth]
            if(babu!=0 && kor%2==(babu==-1?babu+1:babu)){
                if(babu!=0 && tomb[nth-3*babu]==0){
                    mentes(tomb, nth, babu, celbaerte, kor, 0);
                }
                if(babu!=0 && tomb[nth-3*babu+1]!=undefined && Math.floor((nth-3*babu+1)/3) == Math.floor(nth/3)-babu && tomb[nth-3*babu+1]==-babu){
                    mentes(tomb, nth, babu, celbaerte, kor, 1);       
                }
                if(babu!=0 && tomb[nth-3*babu-1]!=undefined && Math.floor((nth-3*babu-1)/3) == Math.floor(nth/3)-babu && tomb[nth-3*babu-1]==-babu){
                    mentes(tomb, nth, babu, celbaerte, kor, -1);           
                }
            }
            Jatekter.#rekurzivKereses(tomb,nth+1, kor)
        }

        function celbaerte(ki, tabla) {
            if(ki==0)
                return false
            let i = 0;
            while (i < 3 && tabla[(ki === 1 ? 0 : 6) + i] !== ki)
            {
                i++;
            }
            return i>=3;
        }

        function mentes(tomb, nth, babu, celbaerte, kor, irany) {
            let asd = tomb.slice();
            asd[nth - 3 * babu + irany] = asd[nth];
            asd[nth] = 0;

            if (babu == -1 && celbaerte(-1, tomb) && celbaerte(1, tomb)) {
                let talal = Jatekter.mindenLepes[kor / 2 - 1].find(key => { return key.allas.join("") == tomb.join(""); });
                if (talal == undefined)
                    Jatekter.mindenLepes[kor / 2 - 1].push({ allas: tomb, lepesek: [[nth, nth - 3 * babu + irany]] });
                else
                    talal.lepesek.push([nth, nth - 3 * babu + irany]);
            }
            Jatekter.#rekurzivKereses(asd, 0, kor + 1);
        }
    }

    #mezoListaToString()
    {
        let tmp = "";
        this.#mezoLista.forEach(element => tmp += element.babu);
        return tmp;
    }

    async #jatekosLep(self)
    {
        return new Promise(function(valasz){

            $(window).on("elemValaszt", event => {
                if (self.#kor % 2 && !(self.#kattintottMezo === null && event.detail.babu === -1))
                { 
                    if (self.#kattintottMezo === null && event.detail.babu === 1)
                    {
                        self.#kattintottMezo = event.detail;
                        self.#kattintottMezo.divElem.attr("id", "kivalasztMezo");
                    }
                    else
                    {
                        if (self.#kattintottMezo.babu === 1 && event.detail.babu === 1)
                        {
                            //self.#kattintottMezo.divElem.css("border", "1px solid black");
                            self.#kattintottMezo.divElem.removeAttr("id", "kivalasztMezo");
                            self.#kattintottMezo=event.detail;
                            self.#kattintottMezo.divElem.attr("id", "kivalasztMezo");
                        }
                        else if (self.#kattintottMezo.legalisLepes(event.detail) || self.#kattintottMezo.legalisTamadas(event.detail))
                        {
                            //self.#kattintottMezo.divElem.css("border", "1px solid black");
                            self.#kattintottMezo.divElem.removeAttr("id", "kivalasztMezo");
                            self.#kattintottMezo.csere(event.detail);
                            self.#kor++;
                            if (self.#ellenorzes(1))
                            {
                                setTimeout(() => {
                                    if(self.#gepLep()==-1)
                                        valasz({ki: -1, gepLepesei: self.#gepLepesei})
                                }, 1000);
                            }
                            else
                            {
                                let tmp=[]
                                self.#gepLepesei.forEach(element => {
                                    //element=element.slice()
                                    tmp.push({gyufasDoboz:new GyufasDoboz(element.gyufasDoboz.allas,element.gyufasDoboz.lepesek.slice()),lepesIndex: element.lepesIndex})
                                });
                                console.warn("nyertél");
                                event.detail.divElem.attr("id", "nyertMezo");
                                self.#tanul();
                                valasz({ki: 1, gepLepesei: tmp})
                            }
                            self.#kattintottMezo = null;
                        }
                    }
                }
            })
        })
    }

    
    #gepLep()
    {
        const allas = this.#mezoListaToString();
        const koronBeluliGyufasDobozok = Jatekter.#gyufasDobozok[this.#kor / 2 - 1];
        let i = 0;
        while (allas !== koronBeluliGyufasDobozok[i].allas.join(""))
        {
            i++
        }
        const rndLepesIndex = Math.floor(Math.random() * koronBeluliGyufasDobozok[i].lepesek.length);
        this.#gepLepesei.push({gyufasDoboz:koronBeluliGyufasDobozok[i], lepesIndex:rndLepesIndex});
        const rndLepes = koronBeluliGyufasDobozok[i].lepesek[rndLepesIndex];
        this.#mezoLista[rndLepes[0]].csere(this.#mezoLista[rndLepes[1]]);
        if (this.#ellenorzes(-1))
        {
            this.#kor++;
            return (0)
        }   
        console.error("vesztettél");
        this.#mezoLista[rndLepes[1]].divElem.attr("id", "veresegMezo");
        return (-1)
    }
    
    #ellenorzes(jatekos)
    {
        return this.#celbaErte(jatekos) && this.#vanBabue(jatekos) && this.#vanLegallisLepese(jatekos)
    }

    #celbaErte(jatekos){
        let i = 0;
        while (i < 3 && this.#mezoLista[(jatekos === 1 ? 0 : 6) + i].babu !== jatekos)
        {
            i++;
        }
        return i>=3;
    }

    #vanBabue(jatekos){
        let i = 0;
        while (i < this.#mezoLista.length && jatekos !== -this.#mezoLista[i].babu)
        {
            i++;
        }
        return i < this.#mezoLista.length;
    }

    #vanLegallisLepese(jatekos){
        let i = 0;
        const szuksegesIndexekSzama = this.#mezoLista.length - 3;
        let jelenlegiMezoIndex = (jatekos === 1 ? 0 : 3);
        let mezo = this.#mezoLista[jelenlegiMezoIndex];
        let kovetkezoMezoIndex = jelenlegiMezoIndex + 3 * jatekos;
        while (i < szuksegesIndexekSzama && !(mezo.legalisLepes(this.#mezoLista[kovetkezoMezoIndex]) || mezo.legalisTamadas(this.#mezoLista[kovetkezoMezoIndex + 1]) || mezo.legalisTamadas(this.#mezoLista[kovetkezoMezoIndex - 1])))
        {
            i++;
            mezo = this.#mezoLista[++jelenlegiMezoIndex];
            kovetkezoMezoIndex = jelenlegiMezoIndex + 3 * jatekos;
        }
        return i < szuksegesIndexekSzama;
    }
    
    #tanul()
    {
        let i = this.#gepLepesei.length;
        do
        {
            i--;
            this.#gepLepesei[i].gyufasDoboz.torol(this.#gepLepesei[i].lepesIndex);
        }
        while (this.#gepLepesei[i].gyufasDoboz.lepesek.length === 0);
    }

    async valasz(){
        return await this.#jatekosLep(this)
    }

    destructor(){
        this.#tablaElem.html("");
    }
}

export default Jatekter;