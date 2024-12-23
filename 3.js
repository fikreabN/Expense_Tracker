let fscrtnwmnthbtn = document.getElementById("fscrtnwmnth");
let editbtn = document.querySelectorAll(".edit");
let rightbtn = document.querySelectorAll(".rightbtn");
let sccrtnwmnthbtn = document.getElementById("sccrtnwmnth");
let bfcrtnwexpnbtn = document.querySelectorAll(".bfcrtnwexpn");
let wlcrtnwexpnbtn = document.querySelectorAll(".wlcrtnwexpn");
let afcrtnwexpnbtn = document.querySelectorAll(".afcrtnwexpn");
let deletebtns = document.querySelectorAll(".dltexpn");
let fstmnyinp = document.getElementById("fstmnyinp");
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let page3 = document.getElementById("page3");
let mnyprvdiv = document.querySelectorAll(".mnyprvdiv");
let mnyeditdiv = document.querySelectorAll(".mnyeditdiv");
let mnyeditinp = document.querySelectorAll(".mnyeditinp");
let nwexpnfrm = document.querySelectorAll(".nwexpnfrm");
let expnnameinp = document.querySelectorAll(".expnnameinp");
let nwexpnslct = document.querySelectorAll(".nwexpnslct");
let expnperinp = document.querySelectorAll(".expnperinp");
let delexpn = document.querySelectorAll(".delexpn");
let dltmnthbtn = document.querySelectorAll(".dltmnth");
let dia = document.querySelectorAll(".dia");
let yes = document.querySelectorAll(".yes");
let no =  document.querySelectorAll(".no");
let mnthnme = document.querySelectorAll(".mnthnme");
let mnthttl = document.querySelectorAll(".mnthttl");
let crtnwmnthfrmbtn = document.querySelectorAll(".crtnwmnthfrmbtn");
let crtnwmnthfrminp = document.querySelectorAll(".crtnwmnthfrminp");
let crtnwmnthfrm = document.querySelectorAll(".crtnwmnthfrm");
let months = document.getElementById("months");
let svgedit = document.querySelectorAll(".svgedit");
let svgright = document.querySelectorAll(".svgright");
let pathedit = document.querySelectorAll(".pathedit");
let pathright = document.querySelectorAll(".pathright");
let expncont = document.getElementById("expncont");


// localStorage.clear()
const str = (obj) => JSON.stringify(obj);
const des = (str) => JSON.parse(str);
const par = (val) => parseInt(val);
let monthObj
if (!localStorage.getItem("monthObj")) {
    monthObj = {
        "mul": false,
        "no": 0,
        "k": {
            1: 1
        },
        "nm": 0
    };
    localStorage.setItem("monthObj", str(monthObj));    
}
let incr = des(localStorage.getItem("monthObj"))["no"];
let nm = des(localStorage.getItem("monthObj"))["nm"];
let k = des(localStorage.getItem("monthObj"))["k"];

if (des(localStorage.getItem("monthObj"))["mul"]){
    // setting fst and rmn from the local storage
    let tempObj = des(localStorage.getItem("monthObj"));
    if (tempObj['no']) {
        for (let i = 1; i <= tempObj['no']; i++){
            let n = Object.keys(tempObj["k"])[i-1]
            if (tempObj[`month${n}`]["budg"]){
                let nwdiv = document.createElement('div');
                nwdiv.classList.add("month");
                nwdiv.classList.add(`month${n}`);
                nwdiv.id = `month${n}`;
                nwdiv.innerHTML = `
                <div class="ncen">
                    <h2 class="mnthttl mnthttl${n}" id="mnthttl${n}">Month ${n}</h2>
                </div>
                <div class="border">
                    <div class="mnyprvdiv" id="mnyprvdiv${n}">
                        <div class="mondiv"><h3 class="mon" id="mon${n}"><span class="rmnmny" id="rmnmny${n}">${tempObj[`month${n}`]["rbudg"]}</span> birr of <span class="fstmny" id="fstmny${n}">${tempObj[`month${n}`]["budg"]}</span> birr</h3></div>
                        <div class="edtdiv" id="editdiv${n}">
                            <abbr title="Edit Your income"><button class="edit" id="edit${n}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="svgedit" id="svgedit${n}" viewBox="0 0 24 24" width="16" height="16">
                                    <path class="pathedit" id="pathedit1" d="M3 17.25V21h3.75l11.073-11.073-3.75-3.75L3 17.25zM22.081 6.08c.29-.29.29-.76 0-1.05l-3.13-3.13c-.29-.29-.76-.29-1.05 0l-2.33 2.33 4.18 4.18 2.33-2.33z"/>
                                </svg>
                            </button></abbr>
                        </div>
                    </div>
                    <div class="mnyeditdiv none" id="mnyeditdiv${n}">
                        <div class="mnyeditinpdiv"><input type="number" id="mnyeditinp${n}" class="mnyeditinp" placeholder="eg. 4500"></div>
                        <div class="rightbtndiv">
                            <button class="rightbtn" id="rightbtn${n}">
                                <svg width="24" height="24" class="svgright" id="svgright${n}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="pathright" id="pathright${n}" d="M20 6L9 17L4 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                  
                            </button>
                        </div>
                    </div>
                    <dialog class="dia dia${n}" id="dia${n}">
                        <p>Are You Sure You Want to Delete <span class="mnthnme mnthnme1" id="mnthnme1"></span>?</p>
                        <button class="yes yes${n}" id="yes${n}">YES</button>
                        <button class="no no${n}" id="no${n}">CANCEL</button>
                    </dialog>
                    <button class="dltmnth" id="dltmnth${n}">Delete</button>
                    <button class="crtnwexpn bfcrtnwexpn" id="bfcrtnwexpn${n}">Create New Expenditure</button>
                    <div class="nwexpnfrm none" id="nwexpnfrm${n}">
                        <p class="frmp namep">Enter The Name of Expenditure</p> 
                        <input type="text" class="nwexpninp expnnameinp" id="expnnameinp${n}" placeholder="eg. Food" maxlength=12>
                        <p class="warn1"><span>*</span>Maximum 12 characters</p>
                        <p class="frmp perp" for="expnnameinp">The Period it is Paid in</p>
                        <select class="nwexpnslct" id="nwexpnslct${n}">
                            <option value="">(Choose an option)</option>
                            <option value="dtd" class="op${n}">Day to Day</option>
                            <option value="weekly" class="op${n}">Weekly</option>
                            <option value="2month" class="op${n}">2X a Month</option>
                            <option value="month" class="op${n}">Monthly</option>
                            <option value="custome" class="op${n}">Custome</option>
                        </select>
                        <input type="number" class="nwexpninp expnperinp" id="expnperinp${n}"  readonly>
                        <p class="warn2"><span>*</span>You can only enter an input in this place if the period is in custom</p>
                        <div class="expnbtndiv"><button class="wlcrtnwexpn nwexpncrtbtn" id="wlcrtnwexpn${n}">Create</button></div>
                    </div>
                    <div class="expndivdiv none" id="expndivdiv${n}">
                        <div class="expndiv" id="expndiv${n}">
                            
                        </div>
                    </div>
                    <div class="nwexpncrtbtndivdiv none">
                        <div class="nwexpncrtbtndiv">
                            <button class=" afcrtnwexpn" id="afcrtnwexpn${n}">Create New Expenditure</button>
                        </div>
                    </div>
                    <div class="none">
                    <div class="none crtnwmnthfrm none" id="crtnwmnthfrm${n}">
                        <p class="crtnwmnthfrmp">Enter Your Income of This Month</p>
                        <input type="number" class="crtnwmnthfrminp crtnwmnthfrminp${n}" id="crtnwmnthfrminp${n}" placeholder="eg. 10000">
                        <button class="crtnwmnthfrmbtn crtnwmnthfrmbtn${n}" id="crtnwmnthfrmbtn1">Continue</button>
                    </div></div>
                </div>
                `
                months.appendChild(nwdiv);
            } else if (!tempObj[`month${n}`]["budg"]){
                let nwdiv = document.createElement('div');
                nwdiv.classList.add("month");
                nwdiv.classList.add(`month${n}`);
                nwdiv.id = `month${n}`;
                nwdiv.innerHTML = `
                <div class="ncen">
                <h2 class="mnthttl mnthttl${n}" id="mnthttl${n}">Month ${n}</h2>
            </div>
            <div class="border">
                <div class="mnyprvdiv none" id="mnyprvdiv${n}">
                    <div class="mondiv"><h3 class="mon" id="mon${n}"><span class="rmnmny" id="rmnmny${n}">2483</span> birr of <span class="fstmny" id="fstmny${n}">49302</span> birr</h3></div>
                    <div class="edtdiv" id="editdiv${n}">
                        <abbr title="Edit Your income"><button class="edit" id="edit${n}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="svgedit" id="svgedit${n}" viewBox="0 0 24 24" width="16" height="16">
                                <path class="pathedit" id="pathedit1" d="M3 17.25V21h3.75l11.073-11.073-3.75-3.75L3 17.25zM22.081 6.08c.29-.29.29-.76 0-1.05l-3.13-3.13c-.29-.29-.76-.29-1.05 0l-2.33 2.33 4.18 4.18 2.33-2.33z"/>
                            </svg>
                        </button></abbr>
                    </div>
                </div>
                <div class="mnyeditdiv none" id="mnyeditdiv${n}">
                    <div class="mnyeditinpdiv"><input type="number" id="mnyeditinp${n}" class="mnyeditinp" placeholder="eg. 4500"></div>
                    <div class="rightbtndiv">
                        <button class="rightbtn" id="rightbtn${n}">
                            <svg width="24" height="24" class="svgright" id="svgright${n}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="pathright" id="pathright1" d="M20 6L9 17L4 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                  
                        </button>
                    </div>
                </div>
                <dialog class="dia dia${n}" id="dia${n}">
                    <p>Are You Sure You Want to Delete <span class="mnthnme mnthnme${n}" id="mnthnme${n}"></span>?</p>
                    <button class="yes yes${n}" id="yes${n}">YES</button>
                    <button class="no no${n}" id="no${n}">CANCEL</button>
                </dialog>
                <button class="dltmnth" id="dltmnth${n}">Delete</button>
                <button class="crtnwexpn bfcrtnwexpn none" id="bfcrtnwexpn${n}">Create New Expenditure</button>
                <div class="nwexpnfrm none" id="nwexpnfrm${n}">
                    <p class="frmp namep">Enter The Name of Expenditure</p> 
                    <input type="text" class="nwexpninp expnnameinp" id="expnnameinp${n}" placeholder="eg. Food" maxlength=12>
                    <p class="warn1"><span>*</span>Maximum 12 characters</p>
                    <p class="frmp perp" for="expnnameinp">The Period it is Paid in</p>
                    <select class="nwexpnslct" id="nwexpnslct${n}">
                        <option value="" selected class="op${n}">(Choose an option)</option>
                        <option value="dtd" class="op${n}">Day to Day</option>
                        <option value="weekly" class="op${n}">Weekly</option>
                        <option value="2month" class="op${n}">2X a Month</option>
                        <option value="month" class="op${n}">Monthly</option>
                        <option value="custome" class="op${n}">Custome</option>
                    </select>
                    <input type="number" class="nwexpninp expnperinp" id="expnperinp${n}"  readonly>
                    <p class="warn2"><span>*</span>You can only enter an input in this place if the period is in custom</p>
                    <div class="expnbtndiv"><button class="wlcrtnwexpn nwexpncrtbtn" id="wlcrtnwexpn${n}">Create</button></div>
                </div>
                <div class="expndivdiv none" id="expndivdiv${n}">
                    <div class="expndiv" id="expndiv${n}">
                        
                    </div>
                </div>
                <div class="nwexpncrtbtndivdiv none">
                    <div class="nwexpncrtbtndiv">
                        <button class=" afcrtnwexpn" id="afcrtnwexpn${n}">Create New Expenditure</button>
                    </div>
                </div>
                <div class="crtnwmnthfrm crtnwmnthfrm${n}" id="crtnwmnthfrm${n}">
                    <p class="crtnwmnthfrmp">Enter Your Income of This Month</p>
                    <input type="number" class="crtnwmnthfrminp crtnwmnthfrminp${n}" id="crtnwmnthfrminp${n}" placeholder="eg. 10000">
                    <button class="crtnwmnthfrmbtn crtnwmnthfrmbtn${n}" id="crtnwmnthfrmbtn${n}">Continue</button>
                </div>
            </div>
                `
                months.appendChild(nwdiv);
                
            }
            
        }
        for (let i = 1; i <= tempObj[`no`]; i++) {
            let n = Object.keys(tempObj["k"])[i-1]
            if(tempObj[`month${n}`]["no"]) {
                document.querySelectorAll(".bfcrtnwexpn")[i-1].classList.add('none');
                document.querySelectorAll(".expndivdiv")[i-1].classList.remove('none');
                document.querySelectorAll(".nwexpncrtbtndivdiv")[i-1].classList.remove('none');
                for(let j = 1; j <= par(tempObj[`month${n}`]["no"]); j++) {
                    let expnObj = tempObj[`month${n}`]['expns'][Object.keys(tempObj[`month${n}`]['expns'])[j-1]];
                    
                    if (expnObj["spndprd"] === "custome") {
                        let nwexpn  = document.createElement("div");
                                    nwexpn.classList.add("expn")
                                    nwexpn.id = `${expnObj["i"]}expn${expnObj["l"]}`
                                    nwexpn.innerHTML = `
                                    <h2 class="name" id="${expnObj["i"]}name${expnObj["l"]}">${expnObj["name"]}</h2>
                                    <p class="per period period${expnObj["i"]} ${expnObj["i"]}period${expnObj["l"]}" id="${expnObj["i"]}period${expnObj["l"]}">Custome Expenditure</p>
                                    <p class="amt">spent "<span class="expnspnt" id="${expnObj["i"]}expnspnt${expnObj["l"]}"> ${expnObj["mny"]} </span>" birr on</p>
                                    <a class="link link1 ${expnObj["i"]}link${expnObj["l"]}" id="${expnObj["i"]}link${expnObj["l"]}">Details on ${expnObj["name"]}</a>
                                    <button class="dltexpn dltexpn1" id="${expnObj["i"]}dltexpn${expnObj["l"]}" onclick="">Delete</button>
                                    <dialog class="exdia exdia${expnObj["i"]}" id="${expnObj["i"]}exdia${expnObj["l"]}">
                                        <p>Are You Sure You Want to Delete <span class="exnme exnme${expnObj["i"]}" id="${expnObj["i"]}exnme${expnObj["l"]}">"${expnObj["name"]}"</span>?</p>
                                        <button class="exyes exyes${expnObj["i"]}" id="${expnObj["i"]}exyes${expnObj["l"]}">YES</button>
                                        <button class="exno exno${expnObj["i"]}" id="${expnObj["i"]}exno${expnObj["l"]}">CANCEL</button>
                                    </dialog>
                                    `;
                                    document.querySelectorAll(".expndiv")[i-1].appendChild(nwexpn);
                    } else {
                        let nwexpn = document.createElement("div");
                                    nwexpn.classList.add("expn")
                                    nwexpn.id = `${expnObj["i"]}expn${expnObj["l"]}`
                                    nwexpn.innerHTML = `
                                    <h2 class="name" id="${expnObj["i"]}name${expnObj["l"]}">${expnObj["name"]}</h2>`
                                    if (expnObj["spndprd"] === 'dtd') {
                                        nwexpn.innerHTML += `<p class="per period period${expnObj["i"]} ${expnObj["i"]}period${expnObj["l"]}" id="${expnObj["i"]}period${expnObj["l"]}">Day to Day Expenditure</p>`
                                    } else if (expnObj["spndprd"] === 'weekly') {
                                        nwexpn.innerHTML += `<p class="per period period${expnObj["i"]} ${expnObj["i"]}period${expnObj["l"]}" id="${expnObj["i"]}period${expnObj["l"]}">Weekly Expenditure</p>`
                                    } else if (expnObj["spndprd"] === '2month') {
                                        nwexpn.innerHTML += `<p class="per period period${expnObj["i"]} ${expnObj["i"]}period${expnObj["l"]}" id="${expnObj["i"]}period${expnObj["l"]}">2X a Month Expenditure</p>`
                                    } else if (expnObj["spndprd"] === 'month') {
                                        nwexpn.innerHTML += `<p class="per period period${expnObj["i"]} ${expnObj["i"]}period${expnObj["l"]}" id="${expnObj["i"]}period${expnObj["l"]}">Monthly Expenditure</p>`
                                    }
                                    nwexpn.innerHTML += `
                                        <p class="amt">spent "<span class="expnspnt" id="${expnObj["i"]}expnspnt${expnObj["l"]}"> ${expnObj["mny"]} </span>" birr on</p>
                                        <a class="link link1 ${expnObj["i"]}link${expnObj["l"]}" id="${expnObj["i"]}link${expnObj["l"]}">Details on ${expnObj["name"]}</a>
                                        <button class="dltexpn dltexpn1" id="${expnObj["i"]}dltexpn${expnObj["l"]}" onclick="">Delete</button>
                                        <dialog class="exdia exdia${expnObj["i"]}" id="${expnObj["i"]}exdia${expnObj["l"]}">
                                            <p>Are You Sure You Want to Delete <span class="exnme exnme${expnObj["i"]}" id="${expnObj["i"]}exnme${expnObj["l"]}">"${expnObj["name"]}"</span>?</p>
                                            <button class="exyes exyes${expnObj["i"]}" id="${expnObj["i"]}exyes${expnObj["l"]}">YES</button>
                                            <button class="exno exno${expnObj["i"]}" id="${expnObj["i"]}exno${expnObj["l"]}">CANCEL</button>
                                        </dialog>
                                    `
                                    document.querySelectorAll(".expndiv")[i-1].appendChild(nwexpn);
                    }

                    // console.log(tempObj[`month${n}`]['expns'][Object.keys(tempObj[`month${n}`]['expns'])[j-1]])
                } 
            }
        }
    }
    
} else {
    page1.classList.remove("none");
    page2.classList.add("none");
}

const fscrtnwmnthbtnfunc = () => {
    if (fstmnyinp.value) {
        if (par(fstmnyinp.value) > 0){
        monthObj = des(localStorage.getItem("monthObj"))
        monthObj["mul"] = true
        incr = 1;
        nm = 1;
        monthObj["nm"] = nm
        monthObj["no"] = incr
        monthObj["month1"] = {
            "budg": par(fstmnyinp.value),
            "spnd": 0,
            "rbudg": par(fstmnyinp.value),
            "no": 0,
            "nm": 0,
            "expns": {
            }
        }
        localStorage.setItem("monthObj", str(monthObj));
        let rmnloc = des(localStorage.getItem("monthObj"))["month1"]["rbudg"];
        let fstloc = des(localStorage.getItem("monthObj"))["month1"]["budg"];
        let nwdiv = document.createElement('div')
        nwdiv.id = "month1"
        nwdiv.classList.add("month1");
        nwdiv.classList.add("month");
        nwdiv.innerHTML = `
                <div class="ncen">
                    <h2 class="mnthttl mnthttl1" id="mnthttl1">Month 1</h2>
                </div>
                <div class="border">
                    <div class="mnyprvdiv" id="mnyprvdiv1">
                        <div class="mondiv"><h3 class="mon" id="mon1"><span class="rmnmny" id="rmnmny1">${rmnloc}</span> birr of <span class="fstmny" id="fstmny1">${fstloc}</span> birr</h3></div>
                        <div class="edtdiv" id="editdiv1">
                            <abbr title="Edit Your income"><button class="edit" id="edit1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="svgedit" id="svgedit1" viewBox="0 0 24 24" width="16" height="16">
                                    <path class="pathedit" id="pathedit1" d="M3 17.25V21h3.75l11.073-11.073-3.75-3.75L3 17.25zM22.081 6.08c.29-.29.29-.76 0-1.05l-3.13-3.13c-.29-.29-.76-.29-1.05 0l-2.33 2.33 4.18 4.18 2.33-2.33z"/>
                                </svg>
                            </button></abbr>
                        </div>
                    </div>
                    <div class="mnyeditdiv none" id="mnyeditdiv1">
                        <div class="mnyeditinpdiv"><input type="number" id="mnyeditinp1" class="mnyeditinp" placeholder="eg. 4500"></div>
                        <div class="rightbtndiv">
                            <button class="rightbtn" id="rightbtn1">
                                <svg width="24" height="24" class="svgright" id="svgright1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="pathright" id="pathright1" d="M20 6L9 17L4 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                  
                            </button>
                        </div>
                    </div>
                    <dialog class="dia dia1" id="dia1">
                        <p>Are You Sure You Want to Delete <span class="mnthnme mnthnme1" id="mnthnme1"></span>?</p>
                        <button class="yes yes1" id="yes1">YES</button>
                        <button class="no no1" id="no1">CANCEL</button>
                    </dialog>
                    <button class="dltmnth" id="dltmnth1">Delete</button>
                    <button class="crtnwexpn bfcrtnwexpn" id="bfcrtnwexpn1">Create New Expenditure</button>
                    <div class="nwexpnfrm none" id="nwexpnfrm1">
                        <p class="frmp namep">Enter The Name of Expenditure</p> 
                        <input type="text" class="nwexpninp expnnameinp" id="expnnameinp1" placeholder="eg. Food" maxlength=12>
                        <p class="warn1"><span>*</span>Maximum 12 characters</p>
                        <p class="frmp perp" for="expnnameinp">The Period it is Paid in</p>
                        <select class="nwexpnslct" id="nwexpnslct1">
                            <option value="">(Choose an option)</option>
                            <option value="dtd" class="op1">Day to Day</option>
                            <option value="weekly" class="op1">Weekly</option>
                            <option value="2month" class="op1">2X a Month</option>
                            <option value="month" class="op1">Monthly</option>
                            <option value="custome" class="op1">Custome</option>
                        </select>
                        <input type="number" class="nwexpninp expnperinp" id="expnperinp1"  readonly>
                        <p class="warn2"><span>*</span>You can only enter an input in this place if the period is in custom</p>
                        <div class="expnbtndiv"><button class="wlcrtnwexpn nwexpncrtbtn" id="wlcrtnwexpn1">Create</button></div>
                    </div>
                    <div class="expndivdiv none" id="expndivdiv1">
                        <div class="expndiv" id="expndiv1">
                            
                        </div>
                    </div>
                    <div class="nwexpncrtbtndivdiv none">
                        <div class="nwexpncrtbtndiv">
                            <button class=" afcrtnwexpn" id="afcrtnwexpn1">Create New Expenditure</button>
                        </div>
                    </div>
                    <div class="none">
                    <div class="none crtnwmnthfrm none" id="crtnwmnthfrm1">
                        <p class="crtnwmnthfrmp">Enter Your Income of This Month</p>
                        <input type="number" class="crtnwmnthfrminp crtnwmnthfrminp1" id="crtnwmnthfrminp1" placeholder="eg. 10000">
                        <button class="crtnwmnthfrmbtn crtnwmnthfrmbtn1" id="crtnwmnthfrmbtn1">Continue</button>
                    </div></div>
                </div>
            </div>
            `
            months.appendChild(nwdiv);
        page1.classList.add('none');
        page2.classList.remove('none');
        
        } else {
            alert ("Enter a Value Greater than 0!")
        }
    } else {
        alert ("Enter your income in the provided place!")
    }
}
fscrtnwmnthbtn.addEventListener("click",fscrtnwmnthbtnfunc)
sccrtnwmnthbtn.addEventListener("click", () => {
    monthObj = des(localStorage.getItem("monthObj"));
    nm = parseFloat(Object.keys(monthObj['k'])[Object.keys(monthObj['k']).length -1]) + 1
    console.log(Object.keys(monthObj['k']), Object.keys(monthObj['k']).length -1, parseFloat(Object.keys(monthObj['k'])[Object.keys(monthObj['k']).length -1]) + 1)
    incr++  
    monthObj["nm"] = nm;
    monthObj["no"] = incr;
    monthObj[`month${nm}`] = {
        "budg": 0,
        "spnd": 0,
        "rbudg": 0,
        "no": 0,
        "nm": 0,
        "expns": {

        }
    }
    localStorage.setItem("monthObj", str(monthObj))
    let nwdiv = document.createElement('div');
    nwdiv.classList.add("month");
    nwdiv.classList.add(`month${nm}`);
    nwdiv.id = `month${nm}`;

    nwdiv.innerHTML = `
            <div class="ncen">
                <h2 class="mnthttl mnthttl${nm}" id="mnthttl${nm}">Month ${nm}</h2>
            </div>
            <div class="border">
                <div class="mnyprvdiv none" id="mnyprvdiv${nm}">
                    <div class="mondiv"><h3 class="mon" id="mon${nm}"><span class="rmnmny" id="rmnmny${nm}">2483</span> birr of <span class="fstmny" id="fstmny${nm}">49302</span> birr</h3></div>
                    <div class="edtdiv" id="editdiv${nm}">
                        <abbr title="Edit Your income"><button class="edit" id="edit${nm}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="svgedit" id="svgedit${nm}" viewBox="0 0 24 24" width="16" height="16">
                                <path class="pathedit" id="pathedit1" d="M3 17.25V21h3.75l11.073-11.073-3.75-3.75L3 17.25zM22.081 6.08c.29-.29.29-.76 0-1.05l-3.13-3.13c-.29-.29-.76-.29-1.05 0l-2.33 2.33 4.18 4.18 2.33-2.33z"/>
                            </svg>
                        </button></abbr>
                    </div>
                </div>
                <div class="mnyeditdiv none" id="mnyeditdiv${nm}">
                    <div class="mnyeditinpdiv"><input type="number" id="mnyeditinp${nm}" class="mnyeditinp" placeholder="eg. 4500"></div>
                    <div class="rightbtndiv">
                        <button class="rightbtn" id="rightbtn${nm}">
                            <svg width="24" height="24" class="svgright" id="svgright${nm}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="pathright" id="pathright1" d="M20 6L9 17L4 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                  
                        </button>
                    </div>
                </div>
                <dialog class="dia dia${nm}" id="dia${nm}">
                    <p>Are You Sure You Want to Delete <span class="mnthnme mnthnme${nm}" id="mnthnme${nm}"></span>?</p>
                    <button class="yes yes${nm}" id="yes${nm}">YES</button>
                    <button class="no no${nm}" id="no${nm}">CANCEL</button>
                </dialog>
                <button class="dltmnth" id="dltmnth${nm}">Delete</button>
                <button class="crtnwexpn bfcrtnwexpn none" id="bfcrtnwexpn${nm}">Create New Expenditure</button>
                <div class="nwexpnfrm none" id="nwexpnfrm${nm}">
                    <p class="frmp namep">Enter The Name of Expenditure</p> 
                    <input type="text" class="nwexpninp expnnameinp" id="expnnameinp${nm}" placeholder="eg. Food" maxlength=12>
                    <p class="warn1"><span>*</span>Maximum 12 characters</p>
                    <p class="frmp perp" for="expnnameinp">The Period it is Paid in</p>
                    <select class="nwexpnslct" id="nwexpnslct${nm}">
                        <option value="" selected class="op${nm}">(Choose an option)</option>
                        <option value="dtd" class="op${nm}">Day to Day</option>
                        <option value="weekly" class="op${nm}">Weekly</option>
                        <option value="2month" class="op${nm}">2X a Month</option>
                        <option value="month" class="op${nm}">Monthly</option>
                        <option value="custome" class="op${nm}">Custome</option>
                    </select>
                    <input type="number" class="nwexpninp expnperinp" id="expnperinp${nm}"  readonly>
                    <p class="warn2"><span>*</span>You can only enter an input in this place if the period is in custom</p>
                    <div class="expnbtndiv"><button class="wlcrtnwexpn nwexpncrtbtn" id="wlcrtnwexpn${nm}">Create</button></div>
                </div>
                <div class="expndivdiv none" id="expndivdiv${nm}">
                    <div class="expndiv" id="expndiv${nm}">
                        
                    </div>
                </div>
                <div class="nwexpncrtbtndivdiv none">
                    <div class="nwexpncrtbtndiv">
                        <button class=" afcrtnwexpn" id="afcrtnwexpn${nm}">Create New Expenditure</button>
                    </div>
                </div>
                <div class="crtnwmnthfrm crtnwmnthfrm${nm}" id="crtnwmnthfrm${nm}">
                    <p class="crtnwmnthfrmp">Enter Your Income of This Month</p>
                    <input type="number" class="crtnwmnthfrminp crtnwmnthfrminp${nm}" id="crtnwmnthfrminp${nm}" placeholder="eg. 10000">
                    <button class="crtnwmnthfrmbtn crtnwmnthfrmbtn${nm}" id="crtnwmnthfrmbtn${nm}">Continue</button>
                </div>
            </div>
    
`
    months.appendChild(nwdiv);

    k[nm] = 1;
    monthObj = des(localStorage.getItem("monthObj"));
    monthObj["k"] = k;
    localStorage.setItem("monthObj", str(monthObj));
})


months.addEventListener("click", (evnt)=> {
    if(evnt.target.classList.contains("edit")){
        let i = (evnt.target.id.match(/([0-9]+)/)[1]) - 1;
        for (let j = 0; j < document.querySelectorAll(".edit").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".edit")[j].id) {
                document.querySelectorAll(".mnyprvdiv")[j].classList.add('none');
                document.querySelectorAll(".mnyeditdiv")[j].classList.remove('none');
                document.querySelectorAll(".mnyeditinp")[j].value = document.querySelectorAll(".fstmny")[j].innerHTML
            }
        }
    }
    if(evnt.target.classList.contains("svgedit")){
        let i = (evnt.target.id.match(/(svgedit)([0-9]+)/)[2]) - 1;
        for (let j = 0; j < document.querySelectorAll(".svgedit").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".svgedit")[j].id) {
                document.querySelectorAll(".mnyprvdiv")[j].classList.add('none');
                document.querySelectorAll(".mnyeditdiv")[j].classList.remove('none');
                document.querySelectorAll(".mnyeditinp")[j].value = document.querySelectorAll(".fstmny")[j].innerHTML
            }
        }   
    }
    if(evnt.target.classList.contains("pathedit")){
        let i = (evnt.target.id.match(/([0-9]+)/)[1]) - 1;
        for (let j = 0; j < document.querySelectorAll(".pathedit").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".pathedit")[j].id) {
                document.querySelectorAll(".mnyprvdiv")[j].classList.add('none');
                document.querySelectorAll(".mnyeditdiv")[j].classList.remove('none');
                document.querySelectorAll(".mnyeditinp")[j].value = document.querySelectorAll(".fstmny")[j].innerHTML;
            }
        }   
    }
    if(evnt.target.classList.contains("rightbtn")){
        let i = evnt.target.id.match(/([0-9]+)/)[1];
        for (let j = 0; j < document.querySelectorAll(".rightbtn").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".rightbtn")[j].id) {
                if (document.querySelectorAll(".mnyeditinp")[j].value){
                    if (document.querySelectorAll(".mnyeditinp")[j].value > 0) {
                        monthObj = des(localStorage.getItem("monthObj"));
                        if (parseFloat(document.querySelectorAll(".mnyeditinp")[j].value) - monthObj[`month${i}`]['spnd'] >= 0) {
                          monthObj[`month${i}`]["budg"] = parseFloat(document.querySelectorAll(".mnyeditinp")[j].value)
                          monthObj[`month${i}`]["rbudg"] = parseFloat(document.querySelectorAll(".mnyeditinp")[j].value) - monthObj[`month${i}`]['spnd'];

                          document.querySelectorAll(".mnyeditdiv")[j].classList.add('none');
                          document.querySelectorAll(".mnyprvdiv")[j].classList.remove('none');
                          document.querySelectorAll(".rmnmny")[j].innerHTML = monthObj[`month${i}`]["rbudg"];
                          document.querySelectorAll(".fstmny")[j].innerHTML = monthObj[`month${i}`]["budg"];  
                          localStorage.setItem("monthObj", str(monthObj))

                        } else {
                            alert(`You have already spend more than ${document.querySelectorAll(".mnyeditinp")[j].value} birr, you have to change the value to ${monthObj[`month${i}`]['spnd']} birr or more than ${monthObj[`month${i}`]['spnd']} birr!`)
                        }
                    } else {
                        alert ("Enter a Value Greater than 0!")
                    }
                } else {
                    alert("Enter your new (edited) income!")
                }
            }
        }
    }
    if(evnt.target.classList.contains("svgright")){
        let i = evnt.target.id.match(/([0-9]+)/)[1];
        for (let j = 0; j < document.querySelectorAll(".svgright").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".svgright")[j].id) {
                if (document.querySelectorAll(".mnyeditinp")[j].value){
                    if (document.querySelectorAll(".mnyeditinp")[j].value > 0) {
                        monthObj = des(localStorage.getItem("monthObj"));
                        if (parseFloat(document.querySelectorAll(".mnyeditinp")[j].value) - monthObj[`month${i}`]['spnd'] >= 0) {
                          monthObj[`month${i}`]["budg"] = par(document.querySelectorAll(".mnyeditinp")[j].value)
                          monthObj[`month${i}`]["rbudg"] = par(document.querySelectorAll(".mnyeditinp")[j].value) - monthObj[`month${i}`]["spnd"];

                          document.querySelectorAll(".mnyeditdiv")[j].classList.add('none');
                          document.querySelectorAll(".mnyprvdiv")[j].classList.remove('none');
                          document.querySelectorAll(".rmnmny")[j].innerHTML = monthObj[`month${i}`]["rbudg"];
                          document.querySelectorAll(".fstmny")[j].innerHTML = monthObj[`month${i}`]["budg"];  
                          localStorage.setItem("monthObj", str(monthObj))

                        } else {
                            alert(`You have already spend more than ${document.querySelectorAll(".mnyeditinp")[j].value} birr, you have to change the value to ${monthObj[`month${i}`]['spnd']} birr or more than ${monthObj[`month${i}`]['spnd']} birr!`)
                        }
                    } else {
                        alert ("Enter a Value Greater than 0!")
                    }
                } else {
                    alert("Enter your new (edited) income!")
                }
            }
        }
    }
    if(evnt.target.classList.contains("pathright")){
        let i = evnt.target.id.match(/([0-9]+)/)[1];
        for (let j = 0; j < document.querySelectorAll(".pathright").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".pathright")[j].id) {
                if (document.querySelectorAll(".mnyeditinp")[j].value){
                    if (document.querySelectorAll(".mnyeditinp")[j].value > 0) {
                        monthObj = des(localStorage.getItem("monthObj"));
                        if (parseFloat(document.querySelectorAll(".mnyeditinp")[j].value) - monthObj[`month${i}`]['spnd'] >= 0) {
                          monthObj[`month${i}`]["budg"] = par(document.querySelectorAll(".mnyeditinp")[j].value)
                          monthObj[`month${i}`]["rbudg"] = par(document.querySelectorAll(".mnyeditinp")[j].value) - monthObj[`month${i}`]["spnd"];

                          document.querySelectorAll(".mnyeditdiv")[j].classList.add('none');
                          document.querySelectorAll(".mnyprvdiv")[j].classList.remove('none');
                          document.querySelectorAll(".rmnmny")[j].innerHTML = monthObj[`month${i}`]["rbudg"];
                          document.querySelectorAll(".fstmny")[j].innerHTML = monthObj[`month${i}`]["budg"];  
                          localStorage.setItem("monthObj", str(monthObj))

                        } else {
                            alert(`You have already spend more than ${document.querySelectorAll(".mnyeditinp")[j].value} birr, you have to change the value to ${monthObj[`month${i}`]['spnd']} birr or more than ${monthObj[`month${i}`]['spnd']} birr!`)
                        }
                    } else {
                        alert ("Enter a Value Greater than 0!")
                    }
                } else {
                    alert("Enter your new (edited) income!")
                }
            }
        }
    }
    if(evnt.target.classList.contains("bfcrtnwexpn")){
        let i = (evnt.target.id.match(/([0-9]+)/)[1]) - 1;
        for (let j = 0; j < document.querySelectorAll(".bfcrtnwexpn").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".bfcrtnwexpn")[j].id) {
                document.querySelectorAll(".bfcrtnwexpn")[j].classList.add('none');
                document.querySelectorAll(".nwexpnfrm")[j].classList.remove('none');
            }
        }
    }
    if(evnt.target.classList.contains("afcrtnwexpn")){
        let i = (evnt.target.id.match(/([0-9]+)/)[1]) - 1;
        for (let j = 0; j < document.querySelectorAll(".afcrtnwexpn").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".afcrtnwexpn")[j].id) {
                document.querySelectorAll(".expndivdiv")[j].classList.add('none');
                document.querySelectorAll(".nwexpncrtbtndivdiv")[j].classList.add('none');
                document.querySelectorAll(".nwexpnfrm")[j].classList.remove('none');
            }
        }
    }
    if(evnt.target.classList.contains("crtnwmnthfrmbtn")){
        let i = (evnt.target.id.match(/([0-9]+)/)[1]);
        for (let j = 0; j < document.querySelectorAll(".crtnwmnthfrmbtn").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".crtnwmnthfrmbtn")[j].id) {
                if (document.querySelectorAll(".crtnwmnthfrminp")[j].value){
                    if (document.querySelectorAll(".crtnwmnthfrminp")[j].value > 0){
                        monthObj = des(localStorage.getItem("monthObj"));
                        monthObj[`month${i}`]["budg"] = par(document.querySelectorAll(".crtnwmnthfrminp")[j].value);
                        monthObj[`month${i}`]["rbudg"] = par(document.querySelectorAll(".crtnwmnthfrminp")[j].value);
                        localStorage.setItem("monthObj", str(monthObj))
                        let rmnmnyid = `rmnmny${i}` 
                        let fstmnyid = `fstmny${i}`
                        document.getElementById(rmnmnyid).innerHTML = document.querySelectorAll(".crtnwmnthfrminp")[j].value
                        document.getElementById(fstmnyid).innerHTML = document.querySelectorAll(".crtnwmnthfrminp")[j].value
                        document.querySelectorAll(".crtnwmnthfrm")[j].style.display = "none";
                        document.querySelectorAll(".mnyprvdiv")[j].classList.remove('none');
                        document.querySelectorAll(".bfcrtnwexpn")[j].classList.remove('none');
                    } else {
                        alert ("Enter a Value Greater than 0!");
                    }
                } else {
                    alert ("Enter a Value in the Provided place!");
                }
            }
        }    
    }
    if(evnt.target.classList.contains("nwexpnslct")){
        let i = (evnt.target.id.match(/([0-9]+)/)[1]) - 1;
        for (let j = 0; j < document.querySelectorAll(".nwexpnslct").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".nwexpnslct")[j].id) {
                if (document.querySelectorAll(".nwexpnslct")[j].value === "custome") {
                    document.querySelectorAll(".expnperinp")[j].removeAttribute("readonly");
                    document.querySelectorAll(".expnperinp")[j].setAttribute("placeholder", "Number of days");
                } else if  (document.querySelectorAll(".nwexpnslct")[j].value !== "custome"){
                    document.querySelectorAll(".expnperinp")[j].setAttribute("readonly", true);
                    document.querySelectorAll(".expnperinp")[j].removeAttribute("placeholder");
                    document.querySelectorAll(".expnperinp")[j].value = "";
                }
            }
        }
    }
    
    if(evnt.target.classList.contains("wlcrtnwexpn")){
        let i = (evnt.target.id.match(/([0-9]+)/)[1]);
        for (let j = 0; j < document.querySelectorAll(".wlcrtnwexpn").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".wlcrtnwexpn")[j].id) {
                if (document.querySelectorAll(".expnnameinp")[j].value) {
                    if (document.querySelectorAll(".nwexpnslct")[j].value) {
                        if (document.querySelectorAll(".nwexpnslct")[j].value ===  'custome') {
                            if (document.querySelectorAll(".expnperinp")[j].value) {
                                if(parseFloat(document.querySelectorAll(".expnperinp")[j].value) < 30){
                                    document.querySelectorAll(".nwexpnfrm")[j].classList.add('none')
                                    document.querySelectorAll(".expndivdiv")[j].classList.remove('none');
                                    document.querySelectorAll(".nwexpncrtbtndivdiv")[j].classList.remove('none');
                                    k[i]++;
                                    monthObj = des(localStorage.getItem("monthObj"));
                                    monthObj[`month${i}`]["no"]++;
                                    let l = ++monthObj[`month${i}`]["nm"];
                                    monthObj["k"] = k;
                                    monthObj[`month${i}`]["expns"][`${i}expn${l}`] = {
                                        "name": document.querySelectorAll(".expnnameinp")[j].value,
                                        "spndprd": "custome",
                                        "days": parseFloat(document.querySelectorAll(".expnperinp")[j].value),
                                        "mny": 0,
                                        "i": i,
                                        "l": l,
                                        "details": {}
                                    }
                                    for (let k = 1; k <= parseFloat(document.querySelectorAll(".expnperinp")[j].value); k++) {
                                        monthObj[`month${i}`]["expns"][`${i}expn${l}`]["details"][k] = null;
                                    }
                                    localStorage.setItem("monthObj", str(monthObj));
                                    let nwexpn  = document.createElement("div");
                                    nwexpn.classList.add("expn")
                                    nwexpn.id = `${i}expn${l}`
                                    nwexpn.innerHTML = `
                                    <h2 class="name" id="${i}name${l}">${document.querySelectorAll(".expnnameinp")[j].value}</h2>
                                    <p class="per period period${i} ${i}period${l}" id="${i}period${l}">Custome Expenditure</p>
                                    <p class="amt">spent "<span class="expnspnt" id="${i}expnspnt${l}"> 0 </span>" birr on</p>
                                    <a class="link link1 ${i}link${l}" id="${i}link${l}">Details on ${document.querySelectorAll(".expnnameinp")[j].value}</a>
                                    <button class="dltexpn dltexpn1" id="${i}dltexpn${l}" onclick="">Delete</button>
                                    <dialog class="exdia exdia${i}" id="${i}exdia${l}">
                                        <p>Are You Sure You Want to Delete <span class="exnme exnme${i}" id="${i}exnme${l}">${document.querySelectorAll(".expnnameinp")[j].value}</span>?</p>
                                        <button class="exyes exyes${i}" id="${i}exyes${l}">YES</button>
                                        <button class="exno exno${i}" id="${i}exno${l}">CANCEL</button>
                                    </dialog>
                                    `;
                                    document.querySelectorAll(".expndiv")[j].appendChild(nwexpn);
                                    document.querySelectorAll(".expnnameinp")[j].value = "";
                                    document.querySelectorAll(".nwexpnslct")[j].value = "";
                                    document.querySelectorAll(".expnperinp")[j].value = "";
                                } else {
                                    alert('Enter a value less than 30!')
                                }
                            } else {
                                alert('Enter a Number of days that you will be spending money on this expenditure!')
                            }
                        } else if (document.querySelectorAll(".nwexpnslct")[j].value !== "custome"){
                                    document.querySelectorAll(".nwexpnfrm")[j].classList.add('none')
                                    document.querySelectorAll(".expndivdiv")[j].classList.remove('none');
                                    document.querySelectorAll(".nwexpncrtbtndivdiv")[j].classList.remove('none');
                                    k[i]++;
                                    monthObj = des(localStorage.getItem("monthObj"));
                                    monthObj[`month${i}`]["no"]++;
                                    let l = ++monthObj[`month${i}`]["nm"];
                                    monthObj["k"] = k;
                                    monthObj[`month${i}`]["expns"][`${i}expn${l}`] = {
                                        "name": document.querySelectorAll(".expnnameinp")[j].value,
                                        "spndprd": "",
                                        "mny": 0,
                                        "i": i,
                                        "l": l,
                                        "details": {}
                                    }
                                    localStorage.setItem("monthObj", str(monthObj));
                                    // let k = parseFloat(document.querySelectorAll(".expndiv")[j].children[document.querySelectorAll(".expndiv")[j].children.length - 1].id.match(/([0-9]+)(expn)([0-9]+)/)[3]) + 1
                                    let nwexpn = document.createElement("div");
                                    nwexpn.classList.add("expn")
                                    nwexpn.id = `${i}expn${l}`
                                    nwexpn.innerHTML = `
                                    <h2 class="name" id="${i}name${l}">${document.querySelectorAll(".expnnameinp")[j].value}</h2>`
                                    // <p class="per period period${i} ${i}period${l}" id="${i}period${l}"> Expenditure</p>
                                    monthObj = des(localStorage.getItem("monthObj"));
                                    ;
                                    if (document.querySelectorAll(".nwexpnslct")[j].value === 'dtd') {
                                        nwexpn.innerHTML += `<p class="per period period${i} ${i}period${l}" id="${i}period${l}">Day to Day Expenditure</p>`
                                        monthObj[`month${i}`]["expns"][`${i}expn${l}`]["spndprd"] = "dtd";
                                        for (let k = 1; k <= 30; k++) {
                                            monthObj[`month${i}`]["expns"][`${i}expn${l}`]["details"][k] = null;
                                        }
                                    } else if (document.querySelectorAll(".nwexpnslct")[j].value === 'weekly') {
                                        nwexpn.innerHTML += `<p class="per period period${i} ${i}period${l}" id="${i}period${l}">Weekly Expenditure</p>`
                                        monthObj[`month${i}`]["expns"][`${i}expn${l}`]["spndprd"] = "weekly";
                                        for (let k = 1; k <= 4; k++) {
                                            monthObj[`month${i}`]["expns"][`${i}expn${l}`]["details"][k] = null;
                                        }
                                    } else if (document.querySelectorAll(".nwexpnslct")[j].value === '2month') {
                                        nwexpn.innerHTML += `<p class="per period period${i} ${i}period${l}" id="${i}period${l}">2X a Month Expenditure</p>`
                                        monthObj[`month${i}`]["expns"][`${i}expn${l}`]["spndprd"] = "2month";
                                        for (let k = 1; k <= 2; k++) {
                                            monthObj[`month${i}`]["expns"][`${i}expn${l}`]["details"][k] = null;
                                        }
                                    } else if (document.querySelectorAll(".nwexpnslct")[j].value === 'month') {
                                        nwexpn.innerHTML += `<p class="per period period${i} ${i}period${l}" id="${i}period${l}">Monthly Expenditure</p>`
                                        monthObj[`month${i}`]["expns"][`${i}expn${l}`]["spndprd"] = "month";
                                        monthObj[`month${i}`]["expns"][`${i}expn${l}`]["details"][1] = null;
                                        
                                    }
                                    localStorage.setItem("monthObj", str(monthObj));
                                    nwexpn.innerHTML += `
                                        <p class="amt">spent "<span class="expnspnt" id="${i}expnspnt${l}"> 0 </span>" birr on</p>
                                        <a class="link link1 ${i}link${l}" id="${i}link${l}">Details on ${document.querySelectorAll(".expnnameinp")[j].value}</a>
                                        <button class="dltexpn dltexpn1" id="${i}dltexpn${l}" onclick="">Delete</button>
                                        <dialog class="exdia exdia${i}" id="${i}exdia${l}">
                                            <p>Are You Sure You Want to Delete <span class="exnme exnme${i}" id="${i}exnme${l}">"${document.querySelectorAll(".expnnameinp")[j].value}"</span>?</p>
                                            <button class="exyes exyes${i}" id="${i}exyes${l}">YES</button>
                                            <button class="exno exno${i}" id="${i}exno${l}">CANCEL</button>
                                        </dialog>
                                    `
                                    // console.log(nwexpn)
                                    document.querySelectorAll(".expndiv")[j].appendChild(nwexpn);
                                    document.querySelectorAll(".expnnameinp")[j].value = "";
                                    document.querySelectorAll(".nwexpnslct")[j].value = "";
                                    document.querySelectorAll(".expnperinp")[j].value = "";
                        }
                    } else {
                        alert("Choose an option of the period it is paid in!");
                    } 
                } else {
                    alert("Enter a name for the expenditure!");
                }
            }
        }
        
    }
    if(evnt.target.classList.contains("dltmnth")){
        let i = (evnt.target.id.match(/([0-9]+)/)[1]);
        // console.log(i,document.querySelectorAll(".dia")[i])
        for(let j = 0; j < document.querySelectorAll(".dia").length; j++){
            if (document.querySelectorAll(".dia")[j].id === "dia" + i) {
                document.querySelectorAll(".dia")[j].showModal();
                document.querySelectorAll(".mnthnme")[j].innerHTML = '"' + document.querySelectorAll(".mnthttl")[j].innerHTML + '"'
            } else {
                // console.log("not working!",document.querySelectorAll(".dia")[j].id,"dia" + i)
            }
        }
    }
    if(evnt.target.classList.contains("yes")){
        let i = evnt.target.id.match(/([0-9]+)/)[1]
        for (let j = 0; j < document.querySelectorAll(".yes").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".yes")[j].id) {
                document.querySelectorAll(".month")[j].remove()
                monthObj = des(localStorage.getItem("monthObj"))
                incr--
                monthObj["no"] = incr;
                delete monthObj[`month${i}`];
                delete k[i];
                delete monthObj["k"][i];
                localStorage.setItem("monthObj", str(monthObj));
            }
        }
        // evnt.target.parentNode.parentNode.parentNode.parentNode.remove();
    }
    if(evnt.target.classList.contains("no")){
        let i = (evnt.target.id.match(/([0-9]+)/)[1]) - 1;
        for (let j = 0; j < document.querySelectorAll(".dia").length; j++) {
            if (document.querySelectorAll(".dia")[j].contains(evnt.target)){
                document.querySelectorAll(".dia")[j].close();
            }
        }
    }
    if(evnt.target.classList.contains("dltexpn")){
        let i = (evnt.target.id.match(/([0-9]+)(dltexpn)([0-9]+)/)[1]);
        let l = (evnt.target.id.match(/([0-9]+)(dltexpn)([0-9]+)/)[3]);
        // console.log(document.querySelectorAll(".exdia"))+
        for(let j = 0; j < document.querySelectorAll(".exdia").length; j++){
            if (document.querySelectorAll(".exdia")[j].id === `${i}exdia${l}`) {
                document.querySelectorAll(".exdia")[j].showModal()
            }
        }
    }
    if(evnt.target.classList.contains("exyes")){
        let i = (evnt.target.id.match(/([0-9]+)(exyes)([0-9]+)/)[1]);
        let l = (evnt.target.id.match(/([0-9]+)(exyes)([0-9]+)/)[3]);
        for (let j = 0; j < document.querySelectorAll(".expn").length; j++) {
            if (document.querySelectorAll(".expn")[j].id === `${i}expn${l}`) {
                monthObj = des(localStorage.getItem("monthObj"))
                monthObj["k"][i]--;
                monthObj[`month${i}`]['spnd'] = monthObj[`month${i}`]['spnd'] - monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny']
                monthObj[`month${i}`]['rbudg'] = monthObj[`month${i}`]['rbudg'] + monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny']
                delete monthObj[`month${i}`]["expns"][`${i}expn${l}`];
                monthObj[`month${i}`]["no"]--;
                localStorage.setItem("monthObj", str(monthObj));
                document.getElementById(`rmnmny${i}`).innerHTML = monthObj[`month${i}`]['rbudg']
                document.querySelectorAll(".expn")[j].remove()

            }
        }
    }
    if(evnt.target.classList.contains("exno")){
        for (let j = 0; j < document.querySelectorAll(".exdia").length; j++) {
            if (document.querySelectorAll(".exdia")[j].contains(evnt.target)){
                document.querySelectorAll(".exdia")[j].close();
            }
        }
    }    
    if(evnt.target.classList.contains("link")){
        let i = (evnt.target.id.match(/([0-9]+)(link)([0-9]+)/)[1]);
        let l = (evnt.target.id.match(/([0-9]+)(link)([0-9]+)/)[3]);
        for (let j = 0; j < document.querySelectorAll(".link").length; j++) {
            if (evnt.target.id === document.querySelectorAll(".link")[j].id) {
                page3.innerHTML = ""
                page2.classList.add("none");
                page3.classList.remove("none");
                let monthObj = des(localStorage.getItem("monthObj"))
                let nwex = document.createElement("div");
                nwex.classList.add("detail");
                nwex.id = `${i}detail${l}`
                nwex.innerHTML = `
                <div class="mnyshowdiv" id="${i}mnyshowdiv${l}">
                    <h2 class="mnyshow" id="${i}mnyshow${l}"><span class="rmnshow" id="${i}rmnshow${l}">${monthObj[`month${i}`]["rbudg"]}</span> birr of <span class="fstshow" id="${i}fstshow${l}">${monthObj[`month${i}`]["budg"]}</span></h2>
                </div>

                <div class="expnshowdiv" id="${i}expnshowdiv${l}">
                    <a  class="back" id="${i}back${l}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left" class="backsvg" id="${i}backsvg${l}">
                            <line x1="19" y1="12" x2="5" y2="12" class="backline" id="${i}lineback${l}"></line>
                            <polyline points="12 19 5 12 12 5" class="backpolyline" class="${i}backpolyline${l}"></polyline>
                        </svg>
                    </a>
                    <h1 class="expnshowname" id="${i}expnshowname${l}">${monthObj[`month${i}`]["expns"][`${i}expn${l}`]["name"]}</h1>
                </div>
                </div>  <div class="expncont" id="${i}expncont${l}">
                `;
                
                page3.appendChild(nwex);
                document.getElementById(`${i}back${l}`).addEventListener("click", ()=>{
                    page2.classList.remove("none");
                    page3.classList.add("none");
                })
                if (monthObj[`month${i}`]["expns"][`${i}expn${l}`]["spndprd"] == 'custome') {
                    let expncont = document.getElementById(`${i}expncont${l}`);
                    let cstmcont = document.createElement('div');
                    cstmcont.classList.add('cstmcont');
                    cstmcont.id = `${i}cstmcont${l}`;
                    expncont.appendChild(cstmcont);
                    let crtnwdaybtn = document.createElement('button');
                    crtnwdaybtn.classList.add('crtnwday');
                    crtnwdaybtn.id = `${i}crtnwday${l}`;
                    crtnwdaybtn.innerHTML = "Create New Day"
                    expncont.appendChild(crtnwdaybtn);
                    let leng = monthObj[`month${i}`][`expns`][`${i}expn${l}`]["days"]
                    for(let g = 1; g <= leng; g++) {
                        let f = Object.keys(monthObj[`month${i}`][`expns`][`${i}expn${l}`]["details"])[g-1]
                        let val = monthObj[`month${i}`][`expns`][`${i}expn${l}`]["details"][Object.keys(monthObj[`month${i}`][`expns`][`${i}expn${l}`]["details"])[g-1]]
                        if(val == null) {
                            let newday = document.createElement('div');
                            newday.classList.add('daydiv')
                            newday.id = `${i}day${l}div${f}`
                            newday.innerHTML = `
                                <div class="daynamediv left" id="${i}day${l}namediv${f}">
                                    <h3 class="h3">Day ${f}</h3>
                                </div>
                                <div class="right">
                                    <p class="dayspend" id="${i}day${l}spend${f}">spend:</p>
                                    <input type="number" class="dayshowinp " id="${i}day${l}showinp${f}"/>
                                    <p class="spendmnyshow none" id="${i}spend${l}mnyshow${f}"></p>
                                    <button class="save" id="${i}sa${l}ve${f}">save</button>
                                    <button class="editspend none" id="${i}edit${l}spend${f}">edit</button>
                                    <button class="deletespend" id="${i}delete${l}spend${f}">Delete</button>
                                    <dialog class="diashow diashow${f}" id="${i}dia${l}show${f}">
                                        <p>Are You Sure You Want to Delete <span class="diap diap${f}" id="${i}dia${l}p${f}"></span>?</p>
                                        <button class="showyes showyes${f}" id="${i}show${l}yes${f}">YES</button>
                                        <button class="showno showno${f}" id="${i}show${l}no${f}">CANCEL</button>
                                    </dialog>
                                </div>
                            `
                            cstmcont.appendChild(newday)   
                        } else {
                            let newday = document.createElement('div');
                            newday.classList.add('daydiv')
                            newday.id = `${i}day${l}div${f}`
                            newday.innerHTML = `
                                <div class="daynamediv left" id="${i}day${l}namediv${f}">
                                    <h3 class="h3">Day ${f}</h3>
                                </div>
                                <div class="right">
                                    <p class="dayspend" id="${i}day${l}spend${f}">spend:</p>
                                    <input type="number" class="dayshowinp none" id="${i}day${l}showinp${f}"/>
                                    <p class="spendmnyshow" id="${i}spend${l}mnyshow${f}">${val} birr</p>
                                    <button class="save none" id="${i}sa${l}ve${f}">save</button>
                                    <button class="editspend" id="${i}edit${l}spend${f}">edit</button>
                                    <button class="deletespend" id="${i}delete${l}spend${f}">Delete</button>
                                    <dialog class="diashow diashow${f}" id="${i}dia${l}show${f}">
                                        <p>Are You Sure You Want to Delete <span class="diap diap${f}" id="${i}dia${l}p${f}"></span>?</p>
                                        <button class="showyes showyes${f}" id="${i}show${l}yes${f}">YES</button>
                                        <button class="showno showno${f}" id="${i}show${l}no${f}">CANCEL</button>
                                    </dialog>
                                </div>
                            `
                            cstmcont.appendChild(newday)  
                            document.getElementById(`${i}spend${l}mnyshow${f}`).style.display = "inline"
                        } 
                    }
                    cstmcont.addEventListener('click', (evny)=>{
                        if(evny.target.classList.contains("save")) {
                            for (let m = 0; m < document.querySelectorAll('.save').length; m++) {
                                if (evny.target.id === document.querySelectorAll(".save")[m].id){
                                    let b = evny.target.id.match(/([0-9]+)(sa)([0-9]+)(ve)([0-9]+)/)[1];
                                    let c = evny.target.id.match(/([0-9]+)(sa)([0-9]+)(ve)([0-9]+)/)[3];
                                    let d = evny.target.id.match(/([0-9]+)(sa)([0-9]+)(ve)([0-9]+)/)[5];
                                    if(document.querySelectorAll(`.dayshowinp`)[m].value) {
                                        if (document.querySelectorAll(`.dayshowinp`)[m].value > -1) {
                                            monthObj = des(localStorage.getItem("monthObj"))
                                            let rmnshow = monthObj[`month${b}`]['rbudg']
                                            if (rmnshow - parseFloat(document.querySelectorAll(`.dayshowinp`)[m].value) >= 0) {
                                                monthObj[`month${b}`]['spnd'] = monthObj[`month${b}`]['spnd'] + parseFloat(document.querySelectorAll(`.dayshowinp`)[m].value);
                                                monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] = monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] + parseFloat(document.querySelectorAll(`.dayshowinp`)[m].value)
                                                rmnshow = rmnshow - parseFloat(document.querySelectorAll(`.dayshowinp`)[m].value);
                                                monthObj[`month${b}`]['expns'][`${b}expn${c}`][`details`][d] = parseFloat(document.querySelectorAll(`.dayshowinp`)[m].value);
                                                monthObj[`month${b}`]['rbudg'] = rmnshow;
                                                localStorage.setItem("monthObj", str(monthObj))
                                                document.getElementById(`${b}expnspnt${c}`).innerHTML =  monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'];
                                                document.getElementById(`rmnmny${b}`).innerHTML = rmnshow;
                                                document.getElementById(`${b}rmnshow${c}`).innerHTML = rmnshow
                                                document.querySelectorAll(`.dayshowinp`)[m].classList.add("none");
                                                document.querySelectorAll(`.spendmnyshow`)[m].style.display = "inline";
                                                document.querySelectorAll(`.save`)[m].classList.add("none")
                                                document.querySelectorAll(`.editspend`)[m].classList.remove("none")
                                                document.querySelectorAll(`.spendmnyshow`)[m].innerHTML = parseFloat(document.querySelectorAll(`.dayshowinp`)[m].value) + " " + "birr"
                                            } else  {
                                                alert("You don't have the budget to spend that much!!")
                                            }
                                        } else {
                                            alert ("Enter a positive value!")
                                        }
                                    } else {
                                        alert ("Enter the amount of money you spend in the provided place!")
                                    }
                                }  
                            }
                        }
                        if(evny.target.classList.contains("editspend")) {
                            for (let m = 0; m < document.querySelectorAll('.editspend').length; m++) {
                                if (evny.target.id === document.querySelectorAll(".editspend")[m].id){
                                    monthObj = des(localStorage.getItem("monthObj"))
                                    let b = evny.target.id.match(/([0-9]+)(edit)([0-9]+)(spend)([0-9]+)/)[1];
                                    let c = evny.target.id.match(/([0-9]+)(edit)([0-9]+)(spend)([0-9]+)/)[3];
                                    let d = evny.target.id.match(/([0-9]+)(edit)([0-9]+)(spend)([0-9]+)/)[5];
                                    document.querySelectorAll(`.dayshowinp`)[m].value = monthObj[`month${b}`]['expns'][`${b}expn${c}`]['details'][d];
                                    let rmnshow = document.getElementById(`${b}rmnshow${c}`);
                                    console.log(monthObj[`month${b}`]['expns'][`${b}expn${c}`]['details'][d])
                                    monthObj[`month${b}`]["rbudg"] = monthObj[`month${b}`]["rbudg"] + monthObj[`month${b}`]['expns'][`${b}expn${c}`]['details'][d];
                                    monthObj[`month${b}`]["spnd"] = monthObj[`month${b}`]["spnd"] - monthObj[`month${b}`]['expns'][`${b}expn${c}`]['details'][d];
                                    monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] = monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] - monthObj[`month${b}`]['expns'][`${b}expn${c}`]['details'][d];
                                    rmnshow.innerText = monthObj[`month${b}`]["rbudg"];
                                    monthObj[`month${b}`]['expns'][`${b}expn${c}`]['details'][d] = null;
                                    localStorage.setItem("monthObj", str(monthObj))
                                    document.getElementById(`${b}expnspnt${c}`).innerHTML =  monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'];
                                    document.getElementById(`rmnmny${b}`).innerHTML = monthObj[`month${b}`]["rbudg"];
                                    document.querySelectorAll(`.dayshowinp`)[m].classList.remove("none");
                                    document.querySelectorAll(`.save`)[m].classList.remove("none");
                                    document.querySelectorAll(`.editspend`)[m].classList.add("none");
                                    document.querySelectorAll(`.spendmnyshow`)[m].style.display = "none";
                                }
                            }
                        }
                        if(evny.target.classList.contains("deletespend")) {
                            for (let m = 0; m < document.querySelectorAll('.deletespend').length; m++) {
                                if (evny.target.id === document.querySelectorAll(".deletespend")[m].id){
                                    let b = evny.target.id.match(/([0-9]+)(delete)([0-9]+)(spend)([0-9]+)/)[1];
                                    let c = evny.target.id.match(/([0-9]+)(delete)([0-9]+)(spend)([0-9]+)/)[3];
                                    let d = evny.target.id.match(/([0-9]+)(delete)([0-9]+)(spend)([0-9]+)/)[5];
                                    document.querySelectorAll(".diashow")[m].showModal()
                                    document.querySelectorAll(".diap")[m].innerHTML = '"' + document.querySelectorAll(".h3")[m].innerText + '"'
                                }
                            }
                        }
                        if(evny.target.classList.contains("showno")) {
                            for (let m = 0; m < document.querySelectorAll('.showno').length; m++) {
                                if (evny.target.id === document.querySelectorAll(".showno")[m].id){
                                    document.querySelectorAll(".diashow")[m].close()
                                }
                            }
                        }
                        if(evny.target.classList.contains("showyes")) {
                            for (let m = 0; m < document.querySelectorAll('.showyes').length; m++) {
                                if (evny.target.id === document.querySelectorAll(".showyes")[m].id){
                                    let b = evny.target.id.match(/([0-9]+)(show)([0-9]+)(yes)([0-9]+)/)[1];
                                    let c = evny.target.id.match(/([0-9]+)(show)([0-9]+)(yes)([0-9]+)/)[3];
                                    let d = evny.target.id.match(/([0-9]+)(show)([0-9]+)(yes)([0-9]+)/)[5];
                                    monthObj = des(localStorage.getItem("monthObj"))
                                    if (!(monthObj[`month${b}`]['expns'][`${b}expn${c}`]['details'][d] == null)) {
                                        let rmnshow = document.getElementById(`${b}rmnshow${c}`);
                                        monthObj[`month${b}`]['rbudg'] = monthObj[`month${b}`]['rbudg'] + monthObj[`month${b}`]['expns'][`${b}expn${c}`]['details'][d];
                                        monthObj[`month${b}`]['spnd'] = monthObj[`month${b}`]['spnd'] - monthObj[`month${b}`]['expns'][`${b}expn${c}`]['details'][d];
                                        monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] = monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] - monthObj[`month${b}`]['expns'][`${b}expn${c}`]['details'][d];
                                        rmnshow.innerText = monthObj[`month${b}`]['rbudg'];
                                        document.getElementById(`${b}expnspnt${c}`).innerHTML =  monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'];
                                        document.getElementById(`rmnmny${b}`).innerText = monthObj[`month${b}`]['rbudg'];
                                    }
                                    monthObj[`month${b}`][`expns`][`${b}expn${c}`]["days"]--;
                                    delete monthObj[`month${b}`]['expns'][`${b}expn${c}`]['details'][d];
                                    document.getElementById(`${b}day${c}div${d}`).remove();
                                    leng = Object.keys(monthObj[`month${b}`]["expns"][`${b}expn${c}`]["details"])[Object.keys(monthObj[`month${b}`]["expns"][`${b}expn${c}`]["details"]).length -1]
                                    localStorage.setItem("monthObj", str(monthObj))
                                }
                            }
                        }
                    })
                    let r = cstmcont.id.match(/([0-9]+)(cstmcont)([0-9]+)/)[1];
                    let o = cstmcont.id.match(/([0-9]+)(cstmcont)([0-9]+)/)[3];
                    monthObj = des(localStorage.getItem("monthObj"));
                    leng = Object.keys(monthObj[`month${r}`]["expns"][`${r}expn${l}`]["details"])[Object.keys(monthObj[`month${r}`]["expns"][`${r}expn${l}`]["details"]).length -1]
                    crtnwdaybtn.addEventListener('click', () => {
                        if (leng < 29){
                            leng++;
                            monthObj[`month${i}`]["expns"][`${i}expn${l}`]["days"]++;
                            monthObj[`month${i}`]["expns"][`${i}expn${l}`]["details"][leng] = null;
                            let newday = document.createElement('div');
                                newday.classList.add('daydiv')
                                newday.id = `${i}day${l}div${leng}`
                                newday.innerHTML = `
                                        <div class="daynamediv left" id="${i}day${l}namediv${leng}">
                                            <h3 class="h3">Day ${leng}</h3>
                                        </div>
                                        <div class="right">
                                            <p class="dayspend" id="${i}day${l}spend${leng}">spend:</p>
                                            <input type="number" class="dayshowinp " id="${i}day${l}showinp${leng}"/>
                                            <p class="spendmnyshow none" id="${i}spend${l}mnyshow${leng}"></p>
                                            <button class="save" id="${i}sa${l}ve${leng}">save</button>
                                            <button class="editspend none" id="${i}edit${l}spend${leng}">edit</button>
                                            <button class="deletespend" id="${i}delete${l}spend${leng}">Delete</button>
                                            <dialog class="diashow diashow${leng}" id="${i}dia${l}show${leng}">
                                                <p>Are You Sure You Want to Delete <span class="diap diap${leng}" id="${i}dia${l}p${leng}"></span>?</p>
                                                <button class="showyes showyes${leng}" id="${i}show${l}yes${leng}">YES</button>
                                                <button class="showno showno${leng}" id="${i}show${l}no${leng}">CANCEL</button>
                                            </dialog>
                                        </div>
                                    `
                                localStorage.setItem("monthObj", str(monthObj)) 
                                cstmcont.appendChild(newday)
                        } else {
                            alert ("You can't create more than 29 days!")
                        }
                    
                    })
                
                } else if (monthObj[`month${i}`]["expns"][`${i}expn${l}`]["spndprd"] == 'dtd') {
                    
                    let expncont = document.getElementById(`${i}expncont${l}`);
                    for(let f = 1; f < 31; f++) {
                        let val = monthObj[`month${i}`][`expns`][`${i}expn${l}`]["details"][Object.keys(monthObj[`month${i}`][`expns`][`${i}expn${l}`]["details"])[f-1]];
                        if(val == null){
                            let newday = document.createElement('div');
                            newday.classList.add('daydiv')
                            newday.id = `${i}day${l}div${f}`
                            newday.innerHTML = `
                                    <div class="daynamediv left" id="${i}day${l}namediv${f}">
                                        <h3>Day ${f}</h3>
                                    </div>
                                    <div class="right">
                                        <p class="dayspend" id="${i}sp${l}end${f}">spend:</p>
                                        <input type="number" class="dayshowinp " id="${i}day${l}showinp${f}"/>
                                        <p class="spendmnyshow none" id="${i}spend${l}mnyshow${f}"></p>
                                        <button class="save " id="${i}sa${l}ve${f}">save</button>
                                        <button class="editspend none" id="${i}edit${l}spend${f}">edit</button>
                                    </div>
                                `
                            expncont.appendChild(newday)
                        } else {
                            let newday = document.createElement('div');
                            newday.classList.add('daydiv')
                            newday.id = `${i}day${l}div${f}`
                            newday.innerHTML = `
                                    <div class="daynamediv left" id="${i}day${l}namediv${f}">
                                        <h3>Day ${f}</h3>
                                    </div>
                                    <div class="right">
                                        <p class="dayspend" id="${i}sp${l}end${f}">spend:</p>
                                        <input type="number" class="dayshowinp none" id="${i}day${l}showinp${f}"/>
                                        <p class="spendmnyshow " id="${i}spend${l}mnyshow${f}">${val} birr</p>
                                        <button class="save none" id="${i}sa${l}ve${f}">save</button>
                                        <button class="editspend" id="${i}edit${l}spend${f}">edit</button>
                                    </div>
                                `
                            expncont.appendChild(newday)
                            document.getElementById(`${i}spend${l}mnyshow${f}`).style.display = "inline"
                        }
                    }
                    for(let a = 1; a < 31; a++) {
                        let saveshow = document.getElementById(`${i}sa${l}ve${a}`);
                        let spendmnyshow = document.getElementById(`${i}spend${l}mnyshow${a}`);
                        let dayshowinp = document.getElementById(`${i}day${l}showinp${a}`);
                        let editspend = document.getElementById(`${i}edit${l}spend${a}`);
                        
                        saveshow.addEventListener("click", ()=>{
                            if(dayshowinp.value) {
                                if(dayshowinp.value > -1) {
                                    let rmnshow = monthObj[`month${i}`]['rbudg']
                                    rmnshow = rmnshow - dayshowinp.value;
                                    if (rmnshow > -1) {
                                        monthObj[`month${i}`]['rbudg'] = rmnshow
                                        monthObj[`month${i}`]['spnd'] = monthObj[`month${i}`]['spnd'] + parseFloat(dayshowinp.value)
                                        monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] = monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] + parseFloat(dayshowinp.value)
                                        document.getElementById(`${i}rmnshow${l}`).innerHTML = monthObj[`month${i}`]['rbudg'];
                                        document.getElementById(`rmnmny${i}`).innerHTML = monthObj[`month${i}`]['rbudg'];
                                        dayshowinp.classList.add("none");
                                        spendmnyshow.style.display = "inline";
                                        saveshow.classList.add("none")
                                        editspend.classList.remove("none")
                                        monthObj[`month${i}`]['expns'][`${i}expn${l}`]['details'][a] = parseFloat(dayshowinp.value)
                                        document.getElementById(`${i}expnspnt${l}`).innerHTML =  monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'];
                                        spendmnyshow.innerHTML = `${monthObj[`month${i}`]['expns'][`${i}expn${l}`]['details'][a]} birr`
                                        localStorage.setItem("monthObj", str(monthObj))
                                    } else {
                                        alert ("You don't have the budget to spend that much!!")
                                    }
                                } else {
                                    alert ("Enter a positive value!")
                                    
                                }
                            } else {
                                alert ("Enter the amount of money you spend in the provided place!")
                            }
                       })

                    }
                    for(let a = 1; a < 31; a++) {
                        let saveshow = document.getElementById(`${i}sa${l}ve${a}`);
                        let spendmnyshow = document.getElementById(`${i}spend${l}mnyshow${a}`);
                        let dayshowinp = document.getElementById(`${i}day${l}showinp${a}`);
                        let editspend = document.getElementById(`${i}edit${l}spend${a}`);
                        
                        editspend.addEventListener("click", ()=>{
                            dayshowinp.value = monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]['rbudg'] = monthObj[`month${i}`]['rbudg'] + monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]['spnd'] = monthObj[`month${i}`]['spnd'] - monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] = monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] - monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a] = null;
                            let rmnshow = document.getElementById(`${i}rmnshow${l}`);
                            rmnshow.innerText = monthObj[`month${i}`]['rbudg'];
                            document.getElementById(`${i}expnspnt${l}`).innerHTML =  monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'];
                            document.getElementById(`rmnmny${i}`).innerHTML = rmnshow.innerText = monthObj[`month${i}`]['rbudg'];
                            dayshowinp.classList.remove("none");
                            saveshow.classList.remove("none"); 
                            editspend.classList.add("none");
                            spendmnyshow.style.display = "none";
                            localStorage.setItem("monthObj", str(monthObj))
                       })
                    }
                } else if (monthObj[`month${i}`]["expns"][`${i}expn${l}`]["spndprd"] == 'weekly'){
                    expncont = document.getElementById(`${i}expncont${l}`)
                    for(let f = 1; f < 5; f++) {
                        let val = monthObj[`month${i}`][`expns`][`${i}expn${l}`]["details"][Object.keys(monthObj[`month${i}`][`expns`][`${i}expn${l}`]["details"])[f-1]];
                        console.log(val)
                        if (val == null) {
                            let newday = document.createElement('div');
                            newday.classList.add('weekdiv')
                            newday.id = `${i}day${l}div${f}`
                            newday.innerHTML = `
                                    <div class="weeknamediv left" id="${i}week${l}namediv${f}">
                                        <h3>Week ${f}</h3>
                                    </div>
                                    <div class="right">
                                        <p class="dayspend" id="${i}sp${l}end${f}">spend:</p>
                                        <input type="number" class="dayshowinp " id="${i}day${l}showinp${f}"/>
                                        <p class="spendmnyshow none" id="${i}spend${l}mnyshow${f}"></p>
                                        <button class="save " id="${i}sa${l}ve${f}">save</button>
                                        <button class="editspend none" id="${i}edit${l}spend${f}">edit</button>
                                    </div>
                                `
                            expncont.appendChild(newday)
                        } else {
                            let newday = document.createElement('div');
                            newday.classList.add('weekdiv')
                            newday.id = `daydiv${f}`
                            newday.innerHTML = `
                                    <div class="weeknamediv left" id="${i}week${l}namediv${f}">
                                        <h3>Week ${f}</h3>
                                    </div>
                                    <div class="right">
                                        <p class="dayspend" id="${i}sp${l}end${f}">spend:</p>
                                        <input type="number" class="dayshowinp none" id="${i}day${l}showinp${f}"/>
                                        <p class="spendmnyshow " id="${i}spend${l}mnyshow${f}">${val} birr</p>
                                        <button class="save none" id="${i}sa${l}ve${f}">save</button>
                                        <button class="editspend " id="${i}edit${l}spend${f}">edit</button>
                                    </div>
                                `
                            expncont.appendChild(newday);
                            document.getElementById(`${i}spend${l}mnyshow${f}`).style.display = "inline"

                        }
                    }
                    for(let a = 1; a < 5; a++) {
                        let saveshow = document.getElementById(`${i}sa${l}ve${a}`);
                        let spendmnyshow = document.getElementById(`${i}spend${l}mnyshow${a}`);
                        let dayshowinp = document.getElementById(`${i}day${l}showinp${a}`);
                        let editspend = document.getElementById(`${i}edit${l}spend${a}`);

                        saveshow.addEventListener("click", ()=>{
                            if(dayshowinp.value) {
                                if(dayshowinp.value > -1) {
                                    let rmnshow = monthObj[`month${i}`]['rbudg']
                                    rmnshow = rmnshow-dayshowinp.value;
                                    if (rmnshow > -1) {
                                        monthObj[`month${i}`]['rbudg'] = rmnshow
                                        monthObj[`month${i}`]['spnd'] = monthObj[`month${i}`]['spnd'] + parseFloat(dayshowinp.value)
                                        monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] = monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] + parseFloat(dayshowinp.value)
                                        document.getElementById(`${i}rmnshow${l}`).innerHTML = monthObj[`month${i}`]['rbudg'];
                                        document.getElementById(`rmnmny${i}`).innerHTML = monthObj[`month${i}`]['rbudg'];
                                        dayshowinp.classList.add("none");
                                        spendmnyshow.style.display = "inline";
                                        saveshow.classList.add("none")
                                        editspend.classList.remove("none")
                                        monthObj[`month${i}`]['expns'][`${i}expn${l}`]['details'][a] = parseFloat(dayshowinp.value)
                                        document.getElementById(`${i}expnspnt${l}`).innerHTML =  monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'];
                                        spendmnyshow.innerHTML = `${monthObj[`month${i}`]['expns'][`${i}expn${l}`]['details'][a]} birr`
                                        localStorage.setItem("monthObj", str(monthObj))
                                    } else {
                                        alert ("You don't have the budget to spend that much!!")
                                    }
                                } else {
                                    alert ("Enter a positive value!")
                                    
                                }
                            } else {
                                alert ("Enter the amount of money you spend in the provided place!")
                            }
                       })
                    }
                    for(let a = 1; a < 5; a++) {
                        let saveshow = document.getElementById(`${i}sa${l}ve${a}`);
                        let spendmnyshow = document.getElementById(`${i}spend${l}mnyshow${a}`);
                        let dayshowinp = document.getElementById(`${i}day${l}showinp${a}`);
                        let editspend = document.getElementById(`${i}edit${l}spend${a}`);
                        
                        editspend.addEventListener("click", ()=>{
                            dayshowinp.value = monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]['rbudg'] = monthObj[`month${i}`]['rbudg'] + monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]['spnd'] = monthObj[`month${i}`]['spnd'] - monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] = monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] - monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a] = null;
                            let rmnshow = document.getElementById(`${i}rmnshow${l}`);
                            rmnshow.innerText = monthObj[`month${i}`]['rbudg'];
                            document.getElementById(`${i}expnspnt${l}`).innerHTML =  monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'];
                            document.getElementById(`rmnmny${i}`).innerHTML = rmnshow.innerText = monthObj[`month${i}`]['rbudg'];
                            dayshowinp.classList.remove("none");
                            saveshow.classList.remove("none"); 
                            editspend.classList.add("none");
                            spendmnyshow.style.display = "none";
                            localStorage.setItem("monthObj", str(monthObj))
                       })
                    }
                } else if (monthObj[`month${i}`]["expns"][`${i}expn${l}`]["spndprd"] == '2month'){
                    expncont = document.getElementById(`${i}expncont${l}`)
                    for(let f = 1; f < 3; f++) {
                        let val = monthObj[`month${i}`][`expns`][`${i}expn${l}`]["details"][Object.keys(monthObj[`month${i}`][`expns`][`${i}expn${l}`]["details"])[f-1]];

                        let newday = document.createElement('div');
                        newday.classList.add('week2div')
                        newday.id = `${i}weeek${l}div${f}`
                        if ( f === 1) {
                            newday.innerHTML = `
                            <div class="week2namediv left" id="${i}weeek${l}namediv${f}">
                                    <h3>first 15 days</h3>
                            </div>
                            `
                        } else if ( f === 2){
                           newday.innerHTML = `
                            <div class="week2namediv left" id="${i}weeek${l}namediv${f}">
                                    <h3>second 15 days</h3>
                            </div>
                           ` 
                        }
                        if (val == null){console.log("ds")
                            newday.innerHTML += `
                                <div class="right">
                                    <p class="dayspend" id="${i}sp${l}end${f}">spend:</p>
                                    <input type="number" class="dayshowinp " id="${i}day${l}showinp${f}"/>
                                    <p class="spendmnyshow none" id="${i}spend${l}mnyshow${f}"></p>
                                    <button class="save " id="${i}sa${l}ve${f}">save</button>
                                    <button class="editspend none" id="${i}edit${l}spend${f}">edit</button>
                                </div>
                            `
                            
                            expncont.appendChild(newday)
                        } else {
                            newday.innerHTML += `
                                <div class="right">
                                    <p class="dayspend" id="${i}sp${l}end${f}">spend:</p>
                                    <input type="number" class="dayshowinp none" id="${i}day${l}showinp${f}"/>
                                    <p class="spendmnyshow " id="${i}spend${l}mnyshow${f}">${val} birr</p>
                                    <button class="save none" id="${i}sa${l}ve${f}">save</button>
                                    <button class="editspend " id="${i}edit${l}spend${f}">edit</button>
                                </div>
                            `
                            expncont.appendChild(newday)
                            document.getElementById(`${i}spend${l}mnyshow${f}`).style.display = "inline"
                        }
                    }
                    for(let a = 1; a < 3; a++) {
                        let saveshow = document.getElementById(`${i}sa${l}ve${a}`);
                        let spendmnyshow = document.getElementById(`${i}spend${l}mnyshow${a}`);
                        let dayshowinp = document.getElementById(`${i}day${l}showinp${a}`);
                        let editspend = document.getElementById(`${i}edit${l}spend${a}`);
                        
                        saveshow.addEventListener("click", ()=>{
                            if(dayshowinp.value) {
                                if(dayshowinp.value > -1) {
                                    let rmnshow = monthObj[`month${i}`]['rbudg']
                                    rmnshow = rmnshow-dayshowinp.value;
                                    if (rmnshow > -1) {
                                        monthObj[`month${i}`]['rbudg'] = rmnshow
                                        monthObj[`month${i}`]['spnd'] = monthObj[`month${i}`]['spnd'] + parseFloat(dayshowinp.value)
                                        monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] = monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] + parseFloat(dayshowinp.value)
                                        document.getElementById(`${i}rmnshow${l}`).innerHTML = monthObj[`month${i}`]['rbudg'];
                                        document.getElementById(`rmnmny${i}`).innerHTML = monthObj[`month${i}`]['rbudg'];
                                        dayshowinp.classList.add("none");
                                        spendmnyshow.style.display = "inline";
                                        saveshow.classList.add("none")
                                        editspend.classList.remove("none")
                                        monthObj[`month${i}`]['expns'][`${i}expn${l}`]['details'][a] = parseFloat(dayshowinp.value)
                                        document.getElementById(`${i}expnspnt${l}`).innerHTML =  monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'];
                                        spendmnyshow.innerHTML = `${monthObj[`month${i}`]['expns'][`${i}expn${l}`]['details'][a]} birr`
                                        localStorage.setItem("monthObj", str(monthObj))
                                    } else {
                                        alert ("You don't have the budget to spend that much!!")
                                    }
                                } else {
                                    alert ("Enter a positive value!")
                                    
                                }
                            } else {
                                alert ("Enter the amount of money you spend in the provided place!")
                            }
                       })
                    }
                    for(let a = 1; a < 3; a++) {
                        let saveshow = document.getElementById(`${i}sa${l}ve${a}`);
                        let spendmnyshow = document.getElementById(`${i}spend${l}mnyshow${a}`);
                        let dayshowinp = document.getElementById(`${i}day${l}showinp${a}`);
                        let editspend = document.getElementById(`${i}edit${l}spend${a}`);
                        
                        editspend.addEventListener("click", ()=>{
                            dayshowinp.value = monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]['rbudg'] = monthObj[`month${i}`]['rbudg'] + monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]['spnd'] = monthObj[`month${i}`]['spnd'] - monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] = monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] - monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a];
                            monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details'][a] = null;
                            let rmnshow = document.getElementById(`${i}rmnshow${l}`);
                            rmnshow.innerText = monthObj[`month${i}`]['rbudg'];
                            document.getElementById(`${i}expnspnt${l}`).innerHTML =  monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'];
                            document.getElementById(`rmnmny${i}`).innerHTML = rmnshow.innerText = monthObj[`month${i}`]['rbudg'];
                            dayshowinp.classList.remove("none");
                            saveshow.classList.remove("none"); 
                            editspend.classList.add("none");
                            spendmnyshow.style.display = "none";
                            localStorage.setItem("monthObj", str(monthObj))
                       })
                    }
                } else if (monthObj[`month${i}`]["expns"][`${i}expn${l}`]["spndprd"] == 'month') {
                    expncont = document.getElementById(`${i}expncont${l}`)
                    let val = monthObj[`month${i}`][`expns`][`${i}expn${l}`]["details"]['1'];
                    console.log(val)
                    if(val == null ) {
                        let newday = document.createElement('div');
                        newday.classList.add('monthdiv')
                        newday.id = `monthdiv1`
                        newday.innerHTML = `
                                <div class="monthnamediv left" id="week2namediv1">
                                    <h3>Monthly</h3>
                                </div>
                                <div class="right">
                                    <p class="dayspend" id="${i}sp${l}end1">spend:</p>
                                    <input type="number" class="dayshowinp " id="${i}day${l}showinp1"/>
                                    <p class="spendmnyshow none" id="${i}spend${l}mnyshow1"></p>
                                    <button class="save " id="${i}sa${l}ve1">save</button>
                                    <button class="editspend none" id="${i}edit${l}spend1">edit</button>
                                </div>
                            `
                        expncont.appendChild(newday) 
                    } else  {
                        let newday = document.createElement('div');
                        newday.classList.add('monthdiv')
                        newday.id = `monthdiv1`
                        newday.innerHTML = `
                                <div class="monthnamediv left" id="week2namediv1">
                                    <h3>Monthly</h3>
                                </div>
                                <div class="right">
                                    <p class="dayspend" id="${i}sp${l}end1">spend:</p>
                                    <input type="number" class="dayshowinp none" id="${i}day${l}showinp1"/>
                                    <p class="spendmnyshow " id="${i}spend${l}mnyshow1">${val} birr</p>
                                    <button class="save none" id="${i}sa${l}ve1">save</button>
                                    <button class="editspend " id="${i}edit${l}spend1">edit</button>
                                </div>
                            `
                        expncont.appendChild(newday);
                        document.getElementById(`${i}spend${l}mnyshow1`).style.display = "inline"
                    }
                    let saveshow = document.getElementById(`${i}sa${l}ve1`);
                    let dayshowinp = document.getElementById(`${i}day${l}showinp1`);
                    let spendmnyshow = document.getElementById(`${i}spend${l}mnyshow1`);
                    let editspend = document.getElementById(`${i}edit${l}spend1`);

                    saveshow.addEventListener("click", ()=>{
                        if(dayshowinp.value) {
                            if(dayshowinp.value > -1) {
                                let rmnshow = monthObj[`month${i}`]['rbudg']
                                rmnshow = rmnshow-dayshowinp.value;
                                if (rmnshow > -1) {
                                    monthObj[`month${i}`]['rbudg'] = rmnshow;
                                    monthObj[`month${i}`]['spnd'] = monthObj[`month${i}`]['spnd'] + parseFloat(dayshowinp.value);
                                    monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] = monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] + parseFloat(dayshowinp.value)
                                    document.getElementById(`${i}rmnshow${l}`).innerHTML = monthObj[`month${i}`]['rbudg'];
                                    document.getElementById(`rmnmny${i}`).innerHTML = monthObj[`month${i}`]['rbudg'];
                                    dayshowinp.classList.add("none");
                                    spendmnyshow.style.display = "inline";
                                    saveshow.classList.add("none")
                                    editspend.classList.remove("none")
                                    monthObj[`month${i}`]['expns'][`${i}expn${l}`]['details']['1'] = parseFloat(dayshowinp.value)
                                    document.getElementById(`${i}expnspnt${l}`).innerHTML =  monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'];
                                    spendmnyshow.innerHTML = `${monthObj[`month${i}`]['expns'][`${i}expn${l}`]['details']['1']} birr`
                                    localStorage.setItem("monthObj", str(monthObj))
                                } else {
                                    alert ("You don't have the budget to spend that much!!")
                                }
                            } else {
                                alert ("Enter a positive value!")
                                
                            }
                        } else {
                            alert ("Enter the amount of money you spend in the provided place!")
                        }
                   })
                    editspend.addEventListener("click", ()=>{
                        dayshowinp.value = monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details']['1'];
                        monthObj[`month${i}`]['rbudg'] = monthObj[`month${i}`]['rbudg'] + monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details']['1'];
                        monthObj[`month${i}`]['spnd'] = monthObj[`month${i}`]['spnd'] - monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details']['1'];
                        monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] = monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'] - monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details']['1'];
                        monthObj[`month${i}`]["expns"][`${i}expn${l}`]['details']['1'] = null;
                        let rmnshow = document.getElementById(`${i}rmnshow${l}`);
                        rmnshow.innerText = monthObj[`month${i}`]['rbudg'];
                        document.getElementById(`${i}expnspnt${l}`).innerHTML =  monthObj[`month${i}`]['expns'][`${i}expn${l}`]['mny'];
                        document.getElementById(`rmnmny${i}`).innerHTML = rmnshow.innerText = monthObj[`month${i}`]['rbudg'];
                        dayshowinp.classList.remove("none");
                        saveshow.classList.remove("none"); 
                        editspend.classList.add("none");
                        spendmnyshow.style.display = "none";
                        localStorage.setItem("monthObj", str(monthObj))
                    })
                }
            }
        }  
    }
})
