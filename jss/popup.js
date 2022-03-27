
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="duminhphongadv"
var a=new Array(),n=""
a[1]='C';
a[2]='ó';
a[3]=' ';
a[4]='ạ';
a[5]='.';
a[6]='A';
a[7]='n';
a[8]='h';
a[9]=' ';
a[10]='L';
a[11]='à';
a[12]='m';
a[13]=' ';
a[14]='C';
a[15]='H';
a[16]='O';
a[17]=' ';
a[18]='E';
a[19]='M';
a[20]=' ';
a[21]='V';
a[22]='u';
a[23]='i';
a[24]=' ';
a[25]='N';
a[26]='H';
a[27]='Ắ';
a[28]='M';
a[29]=' ';
a[30]='E';
a[31]='m';
a[32]=' ';
a[33]='T';
a[34]='h';
a[35]='i';
a[36]='c';
a[37]='h';
a[38]=' ';
a[39]='A';
a[40]='♥';

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==29)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>Hí hí Anh Cũng Thích khi ở bên em lắm moazz ♥♥ <img src='http://website1gia.com/files/assets/3.png'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>♥ Anh bít anh đẹp trai mè hí hí. Anh sẽ iu em và lun làm cho em cừi ạ vì mỗi khi em cười là anh cảm thấy mình vui vẻ hơn hí hí. Yêuu bé ♥ .<img src='http://website1gia.com/files/assets/4.png'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>ĐỪNG KHÓC HAY CÔ ĐƠN Ạ VÌ ANH SẼ LUN Ở ĐÂY VS EM TUY XA NHƯNG MÀ GẦN NHẮM VÌ ANH TRONG TIM EM MÈ ♥!  <img src='http://website1gia.com/files/assets/5.png'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				