function getId(id){
	return document.getElementById(id);
}

$("#sendZone").click(function(event){
    var str = event.target.value;
    console.log(str);
    item = `<div class="me"> <span>${str}</span> </div>`;
    talk.innerHTML += item;
    $.ajax({
        type:'POST',
        url : '/click',
        dataType: 'json',
        data : {
            str:str
        },
        success : function(result) {
            console.log("성공");
            console.log(result);
            console.log(result.content);
            item = `<div class="other">
                        <div>
                            <ul>${str}</ul>
                        </div>
                        <div>
							<li><b class="text">${result.content1}</b></li> <br/>
							<li class="text">${result.content2}</li> <br/>
							<li class="text">${result.content3}</li> <br/>
                        </div>
					</div>`;
            talk.innerHTML += item;
            talk.scrollTop=talk.scrollHeight;//스크롤바 하단으로 이동
        },
        error : function(result){
            console.log("시류ㅐ");
            console.log(result);

        }
    })
});

$("#talk").click(function(event){
    var str = event.target.innerText;
    console.log(str);

    item = `<div class="me"> <span>${str}</span> </div>`;
    talk.innerHTML += item;

    if(str =="일반 경매" || str == "실시간 경매") {
        send2(str);
    }else{

        $.ajax({
            type:'POST',
            url : '/message',
            dataType: 'json',
            data : {
                str:str
            },
            success : function(result) {
                console.log("성공");
                console.log(result);
                console.log(result.content);
                
                if((str == "일반 경매 하러가기") || (str == "실시간 경매 하러가기")) {
                    item = `<div class="other">
                            <div>
                                <a href =${result.content} class="text">${str}</a> <br/>
                            </div>
                        </div>`;
                }
                else if((str == "일반 경매 신청하는 법") || (str == "실시간 경매 신청하는 법") || (str == "경매 신청하는 법")) {
                    item = `<div class="other">
                                <div>
                                    <a href =${result.url} class="text">신청하러 가기</a><br/>
                                    <b class="text">${result.content}</b> <br/>
                                </div>
                            </div>`;
                }
                else{
                    item = `<div class="other">
                                <div>
                                    <b class="text">${result.content}</b> <br/>
                                </div>
                            </div>`;
                }
                talk.innerHTML += item;
                talk.scrollTop=talk.scrollHeight;//스크롤바 하단으로 이동
            },
            error : function(result){
                console.log("시류ㅐ");
                console.log(result);

            }
        })
    }
})

var msg = getId('msg');
$("#msgSend").click(function(){
    let index = msg.value;
    var str;

    me(index);

    if(index.includes('일반')) {
        if(index.includes('일반') && index.includes("경매") && index.includes("신청") || index.includes("게시판")) {
            str = "일반 경매 신청하는 법";
            me(index);
            send1(str);
        }else if(index.includes('일반') && index.includes("경매") || index.includes("하러") || index.includes("참여")){
            str = "일반 경매 하러가기";
            me(index);
            send1(str);
        }
        else if(index.includes('일반') && index.includes("경매") && index.includes("주의")){
            str = "일반 경매 주의사항";
            me(index);
            send1(str);
        }
        else if(index.includes('일반') && index.includes("경매")) {
            me(index);
            str = "일반 경매";
            send2(str);
        }else{
            me(index);
            str="일반 경매";
            send2(str);
        }
    }

    if(index.includes('실시간')) {
        if(index.includes('실시간') && index.includes("경매") || index.includes("신청") || index.includes("게시판")) {
        str = "실시간 경매 신청하는 법";
        me(index);
        send1(str);
        }else if(index.includes('실시간') && index.includes("경매") || index.includes("하러") || index.includes("참여")){
            str = "실시간 경매 하러가기";
            me(index);
            send1(str);
        }
        else if(index.includes('실시간') && index.includes("경매") && index.includes("주의")){
            str = "실시간 경매 주의사항";
            me(index);
            send1(str);
        }
        else if(index.includes('실시간') && index.includes("경매")) {
            me(index);
            str = "실시간 경매";
            send2(str);
        }else{
            me(index);
            str="실시간 경매";
            send2(str);
        }
    }

    if(index.includes('경매')) {
        if(index.includes('경매') && index.includes('승인') || index.includes('기간')) {
            me(index);
            str = "경매 승인 기간";
            send1(str);

        }else if(index.includes('경매') && index.includes('신청')){
            me(index);
            str = "경매 신청하러 가기";
            send1(str);

        }else{
            me(index);
            str = "경매";
            $.ajax({
                type:'POST',
                url : '/bid',
                dataType: 'json',
                data : {
                    str:str
                },
                success : function(result) {
                    console.log("성공");
                    console.log(result);
                    console.log(result.content);
                    item = `<div class="other">
                                <div>
                                    <ul>${str}</ul>
                                </div>
                                <div>
                                    <li><b class="text">${result.content1}</b></li> <br/>
                                    <li class="text">${result.content2}</li> <br/>
                                    <li class="text">${result.content3}</li> <br/>
                                </div>
                            </div>`;
                    talk.innerHTML += item;
                },
                error : function(result){
                    console.log("시류ㅐ");
                    console.log(result);
        
                }
            })
        }
    }

    if(index.includes('배송')) {
        if(index.includes('배송') && index.includes('기간')) {
            me(index);
            str = "배송 기간";
            send1(str);

        }else if(index.includes('배송') && index.includes('주소') && index.includes('잘못')){
            me(index);
            str = "배송 주소 잘못적으셨다면?";
            send1(str);
        }else if(index.includes('배송') && index.includes('주소')){
            me(index);
            str = "배송 주소";
            send1(str);
        }
        else{
            me(index);
            str = "배송";
            send2(str);
        }
    }

    if(index.includes('포인트')){
        if(index.includes('포인트') && index.includes('충전')){
            me(index);
            str = "포인트 충전";
            send1(str);

        }else if(index.includes('포인트') && index.includes('사용') || index.includes('방법')) {
            me(index);
            str = "포인트 사용 방법";
            send1(str);
        }else {
            me(index);
            str = "포인트 충전";
            send1(str);
        }
    }

})

function me(index) {
    item = `<div class="me"> <span>${index}</span> </div>`;
    talk.innerHTML += item;
    console.log("hihi");
    
    msg.value='';
}

function send1(str) {
    $.ajax({
        type:'POST',
        url : '/message',
        dataType: 'json',
        data : {
            str:str
        },
        success : function(result) {
            console.log("성공");
            console.log(result);
            console.log(result.content);
            
            if((str == "일반 경매 하러가기") || (str == "실시간 경매 하러가기")) {
                item = `<div class="other">
                        <div>
							<a href =${result.content} class="text">${str}</a> <br/>
                        </div>
					</div>`;
            }
            else if((str == "일반 경매 신청하는 법") || (str == "실시간 경매 신청하는 법") || (str == "경매 신청하는 법"))  {
                item = `<div class="other">
                            <div>
                                <a href =${result.url} class="text">신청하러 가기</a><br/>
                                <b class="text">${result.content}</b> <br/>
                            </div>
                        </div>`;
            }else if(str == "포인트 충전") {
                item = `<div class="other">
                            <div>
                                <a href =${result.url} class="text">포인트 충전하러 가기</a><br/>
                                <b class="text">${result.content}</b> <br/>
                            </div>
                        </div>`;
            }
            else{
                item = `<div class="other">
                            <div>
                                <b class="text">${result.content}</b> <br/>
                            </div>
                        </div>`;
            }
            talk.innerHTML += item;
        },
        error : function(result){
            console.log("시류ㅐ");
            console.log(result);

        }
    })
}

function send2(str) {
    $.ajax({
        type:'POST',
        url : '/click',
        dataType: 'json',
        data : {
            str:str
        },
        success : function(result) {
            console.log("성공");
            console.log(result);
            console.log(result.content);
            item = `<div class="other">
                        <div>
                            <ul>${str}</ul>
                        </div>
                        <div>
							<li><b class="text">${result.content1}</b></li> <br/>
							<li class="text">${result.content2}</li> <br/>
							<li class="text">${result.content3}</li> <br/>
                        </div>
					</div>`;
            talk.innerHTML += item;
        },
        error : function(result){
            console.log("시류ㅐ");
            console.log(result);

        }
    })
}