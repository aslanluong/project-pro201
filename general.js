
// General
function timkiem(theinput){
		if(window.event.keyCode==13){
			for(var i=1;i<arr.length;i++){
    		var name1= ""+arr[i].name+""
    		var name= name1.toUpperCase();
    		var key=theinput.value.toUpperCase();
			//alert(name);
			//alert(key);
			var dem = 0;
			var vitri = 0;
			if(name.indexOf(key)!=-1) {vitri = i; break;}
			else dem+=1;}
			if(dem!=0) alert("Mặt hàng này có thể chưa được nhập hoặc ngừng kinh doanh. Xin vui lòng tìm kiếm sản phẩm khác!");
			else {//alert("tu khoa dau tien tim thay lien quan đến "+arr[i].name+".");
			var url_string = window.location.href; //window.location.href
			var url = new URL(url_string);
			if	(url.searchParams.get("pcode") > 0 && url.searchParams.get("pcode") <= arr.length){
				window.open("./details.html?name="+arr[i].link+"&pcode="+arr[i].pcode,"_blank");
			} else window.open("./phone/details.html?name="+arr[i].link+"&pcode="+arr[i].pcode,"_blank");}
		}
}
function khungsp(no_class,pcode) {
	var ttsp=document.getElementsByClassName("khungsp")
	ttsp[no_class-1].innerHTML="<a href='./phone/details.html?name="+arr[pcode].link+"&pcode="+pcode+"'>"+"<div class='khungsp_trong'>"
			+"<div class='sp'><img src='"+arr[pcode].image+"'><br><p>"
			+arr[pcode].name+"</p><span class='giamoi'>"+arr[pcode].price
			+"</span>&emsp;<span class='giacu'>"+arr[pcode].old_price
			+"</span></div><div class='ttsp'><b>"+arr[pcode].name+"<br/><p><span class='giamoi'>"
			+arr[pcode].price+"</span></p><ul>Cấu hình</b><li>Màn hình: "+arr[pcode].sscreen
			+"</li><li>HĐH: "+arr[pcode].os+"</li><li>CPU: "+arr[pcode].cpu
			+"</li></ul><div class='quatang'>"+arr[pcode].qtang+"</div></div></a>";
}
function showTime() {
	var day=new Date(); //lay thong tin dong ho may tinh cua client
	var ngay=day.getDate();
	var thang=day.getMonth()+1;
	var nam=day.getFullYear();
	var time=document.getElementById("time");
	time.innerHTML+=ngay+" tháng "+thang+", "+nam;
}
function gopy_submit(){
	var t1=document.getElementById("input-name");
	var t2=document.getElementById("input-email");
	var t3=document.getElementById("input-phone");
	var t4=document.getElementById("input-noidung");

	if(t1.value ==""){
		alert("Bạn chưa nhập tên!");
		t1.focus(); // tự đặt dấy nháy vào ô name;
		return false;
	}
	else if (t2.value != "" && t2.value.match("[a-zA-Z]+@[a-zA-Z]+[.][a-zA-Z]+")==null){
		alert("Bạn nhập sai định dạng email! Email có dạng abc@def.xyz."+
			" Abc, def, xyz có nội dung khác nhau tùy theo nhà cung cấp email.");
		t2.focus();
		return false;
	}
	else if (t3.value == "" || t3.value.match("^0[0-9]{9,10}$") == null){
		alert("Bạn nhập sai định dạng số điện thoại! SĐT gồm 10 hoặc 11 số và bắt đầu bằng 0");
		t3.focus();
		return false;
	}
	else if (t4.value == ""){
		alert("Bạn chưa nhập nội dung!");
		t4.focus();
		return false;
	}
	alert("Cảm ơn bạn đã góp ý. Chúng tôi luôn luôn lắng nghe ý kiến của bạn!");
	window.open("index.html","_self"/*,"_top": xuat cua so cao nhat của index dùng ifame */); // chuyển trang bất kỳ mình thích
	return true;
}
function vitri(){
	//var the_select=document.getElementById("vitri");
	//var y=the_select.selectedIndex;
	//var tp=the_select.options[i].text;
	var selectBox = document.getElementById("vitri");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	//alert(selectedValue);
	if (selectedValue==1){
		var ttcuahang = document.getElementById("vitri-chitiet");
		ttcuahang.innerHTML = "<li> Hiện tại đang có "+cuahang[0].soshopoTP+" cửa hàng</li>";
		for(var i=1;i<=3;i++)
		ttcuahang.innerHTML += "<li><i class='fas fa-check-circle'></i> "+cuahang[i].address+"</li>";}
	else if (selectedValue==2){
		var ttcuahang = document.getElementById("vitri-chitiet");
		ttcuahang.innerHTML = "<li> Hiện tại đang có "+cuahang[0].soshopoHN+" cửa hàng</li>";
		for(var i=4;i<=5;i++)
		ttcuahang.innerHTML	+= "<li><i class='fas fa-check-circle'></i> "+cuahang[i].address+"</li>";}
}
// Sanpham
function danhmuc(obj){ // Thay đổi style khi click vào các danh mục
	var nsx=document.getElementsByClassName("nsx"); var n =0;
	for(var i =0;i<nsx.length;i++){
		nsx[i].style.fontWeight="normal";
		nsx[i].style.padding= "5px";
	}
	obj.style.fontWeight="bold";
	obj.style.padding= "7px 5px 7px 5px";
}
function truotlen() {
		// lấy vị trí hiện hành của scroll bar
		var y=window.pageYOffset; //y cuon doc, x cuon ngang
		y=y-10;
		if(y<=0)
			window.clearInterval(id);
		window.scrollTo(0,y);
	}
function hengio(){
		id=window.setInterval(truotlen,5);
}
function showupbutton(){
		var y=window.pageYOffset;
		if(y<250){
			var d=document.getElementById("scroll");
			d.style.display="none";
		}
		else {
			var d=document.getElementById("scroll");
			d.style.display="block";
		}
	}
function hiensp(start_number,end_number){
	var khungchuasp=document.getElementById("khungchuasp");
	khungchuasp.innerHTML="";
	for(var i = start_number; i<=end_number; i++){
	var khungchua = document.createElement('div');
    khungchua.className = "khungsp";
    khungchuasp.appendChild(khungchua);
	khungchua.innerHTML="<a href='./phone/details.html?name="+arr[i].link+"&pcode="+arr[i].pcode+"'>"+"<div class='khungsp_trong'>"
			+"<div class='sp'><img src='"+arr[i].image+"'><br><p>"
			+arr[i].name+"</p><span class='giamoi'>"+arr[i].price
			+"</span>&emsp;<span class='giacu'>"+arr[i].old_price
			+"</span></div><div class='ttsp'><b>"+arr[i].name+"<br/><p><span class='giamoi'>"
			+arr[i].price+"</span></p><ul>Cấu hình</b><li>Màn hình: "+arr[i].sscreen
			+"</li><li>HĐH: "+arr[i].os+"</li><li>CPU: "+arr[i].cpu
			+"</li></ul><div class='quatang'>"+arr[i].qtang+"</div></div></a>";
	}
}
function onload_phoneDetails(){
	var pcode = 0;
	var url_string = window.location.href; //window.location.href
	var url = new URL(url_string);
	pcode = url.searchParams.get("pcode");
	var name = url.searchParams.get("name");
	var found = false;
	for (var i = 1; i < arr.length; i++){
		if (arr[i].link.localeCompare(name)==0 && arr[i].pcode == pcode){
		found = true;

	//Tên sản phẩm
	var tensp=document.getElementsByClassName("tensp");
	for (var i=0; i<tensp.length;i++){
		tensp[i].innerHTML = arr[pcode].name;
	}
	//Hình ảnh
	var khunghinh=document.getElementById("khung-anh");
	khunghinh.innerHTML = "<img src = '../"+arr[pcode].image+"'>";

	var hinhanh=document.getElementById("datmua_trai");
	hinhanh.innerHTML = arr[pcode].name + "<img src = '../"+arr[pcode].image+"'>";

	//Giá
	var gia=document.getElementById("gia");
	gia.innerHTML="<span class='giamoi'>"+arr[pcode].price+"</span>&emsp;<span class='giacu'>"+arr[pcode].old_price+"</span>";

	//Màu sắc
	var mausac=document.getElementById("chonmau");
	var tachmau=arr[pcode].color;
	var arrmau=tachmau.split(",");
	for (var i=0;i<arrmau.length;i++){
		mausac.innerHTML += "<li style='background-color:"+arrmau[i]+";'></li>";
	}

	//Thông tin chi tiết
	var ttct=document.getElementsByClassName("thongtin");
	//ttct[0].innerHTML = arr[x].connect;
	for(var i=0; i<ttct.length;i++)
		switch(i){
			case 0: ttct[i].innerHTML = arr[pcode].connect; break;
			case 1: ttct[i].innerHTML = arr[pcode].size; break;
			case 2: ttct[i].innerHTML = arr[pcode].weight; break;
			case 3: ttct[i].innerHTML = arr[pcode].sim; break;
			case 4: ttct[i].innerHTML = arr[pcode].sctype; break;
			case 5: ttct[i].innerHTML = arr[pcode].sscreen; break;
			case 6: ttct[i].innerHTML = arr[pcode].sresolution; break;
			case 7: ttct[i].innerHTML = arr[pcode].os; break;
			case 8: ttct[i].innerHTML = arr[pcode].chipset; break;
			case 9: ttct[i].innerHTML = arr[pcode].cpu; break;
			case 10: ttct[i].innerHTML = arr[pcode].gpu; break;
			case 11: ttct[i].innerHTML = arr[pcode].memory; break;
			case 12: ttct[i].innerHTML = arr[pcode].mSD; break;
			case 13: ttct[i].innerHTML = arr[pcode].camera; break;
			case 14: ttct[i].innerHTML = arr[pcode].pin; break;
		}

			
		}
	}
	if (!found){
		window.open("../index.html","_self");
	}
}
function datmua(){
	var datmua=document.getElementById("datmua");
	datmua.style.display="block";
	
}
function huy(){
	var datmua=document.getElementById("datmua");
	datmua.style.display="none";
}
function dathang_submit(){
	var in1=document.getElementById("in1");
	var in2=document.getElementById("in2");
	var in3=document.getElementById("in3");
	var in4=document.getElementsByName("ptgh");
	var in5=document.getElementById("in4");

	if(in1.value ==""){
		alert("Bạn chưa nhập tên!");
		in1.focus(); // tự đặt dấy nháy vào ô name;
		return false;
	}
	else if (in2.value == "" || in2.value.match("^0[0-9]{9,10}$") == null){
		alert("Bạn nhập sai định dạng số điện thoại! SĐT gồm 10 hoặc 11 số và bắt đầu bằng 0");
		in2.focus();
		return false;
	}
	else if (in4[0].checked == false && in4[1].checked == false){
		alert("Bạn chưa chọn phương thức nhận hàng! (tại nhà/ tại shop)");
		return false;
	}
	else if (in4[0].checked == true &&  in5.value ==""){
		alert("Bạn chưa nhận địa chỉ nhận hàng!");
		in5.focus();
		return false;
	}
	alert("Cảm ơn bạn đã mua hàng tại Mắc mobile. Đơn hàng của bạn đang được xử lý!");
	window.open("../index.html","_self"/*,"_top": xuat cua so cao nhat của index dùng ifame */); // chuyển trang bất kỳ mình thích
	return true;
}
function diachi(){
	var in4=document.getElementsByName("ptgh");
	var diachi=document.getElementById("diachi");
	var taishop=document.getElementById("taishop");

	if(in4[0].checked == true){
	diachi.style.display = "block";}
	else if(in4[1].checked == true){
	taishop.style.display = "block";
	diachi.style.display = "none";}
	else {diachi.style.display = "none";
	taishop.style.display = "none";}
}
function khuvuc(obj){
	var luachon = obj.children;
	var taishop = document.getElementById("taishop");
	for (var i = 0; i < luachon.length; i++){
                    if (luachon[i].selected){
                        taishop.innerHTML = "Nhận hàng tại tất cả cửa hàng khu vực "+luachon[i].value;
                    }
                }
}

// Index.html
function dorong(){
	a=document.documentElement.clientWidth;
	b=window.screen.availWidth;
	//var hinhkm_ngoai=document.getElementById("header-cointainer")
	//var wpx=window.getComputedStyle(hinhkm_ngoai);
	//var width = x*parseFloat(wpx.width);
	alert(a);
}
function truot(x) {
	var hinhkm_ngoai=document.getElementById("hinhkm_ngoai");
	var hinhkm_trong=document.getElementById("hinhkm_trong");
	var wpx=window.getComputedStyle(hinhkm_ngoai);
	var width = x*parseFloat(wpx.width);
	hinhkm_trong.style.transform='translate(-'+ width +'px, 0px)';
	hinhkm_trong.style.transition='transform 0.7s';
	// màu thay đổi khi nhấn vào tin km
	var tin_km=document.getElementById("kml");
	var arr=tin_km.getElementsByClassName("tinkm");
	for(var i=0;i<arr.length;i++){
		arr[i].style.backgroundColor="white";
		}
	arr[x].style.backgroundColor="#d70018";
		arr[x].style.fontColor = "white";
}
function show() {
	var hkm=document.getElementById("hinhkm_ngoai"), hkmStyle = window.getComputedStyle(hkm);

	alert (parseFloat(hkmStyle.width));
}
function goheader() {
	var a=document.getElementsByClassName("goheader");
	for(var i=0;i<a.length;i++){
		if(a[i].getAttribute("href"))a.target = "_blank";
	}
}

// Array
var cuahang=[
	{
		no: 0,
		soshopoTP: 3,
		soshopoHN: 2,
	},
	{
		no: 1,
		address: "Tầng 3, tòa nhà Innovation, QTSC, quận 12, TP.Hồ Chí Minh",
	},
	{
		no: 2,
		address: "848 Lạc Long Quân,P.8, Q.Tân Bình, TP.Hồ Chí Minh",
	},
	{
		no: 3,
		address: "270B Lý Thường Kiệt, Phường 06, Quận Tân Bình, TP.Hồ Chí Minh",
	},
	{
		no: 4,
		address: "Số 62 Nguyễn Hữu Thọ, P. Hoàng Liệt, Q. Hoàng Mai, TP. Hà Nội",
	},
	{
		no: 5,
		address: "Khu CNC KM29, Đại Lộ Thăng Long, Hòa Lạc, TP. Hà Nội",
	}
];
var arr=[
	{
		pcode: 0,
		note: "Macmobile's javascript file - PRO201 project of ThangLTSE63356 and MinhTBSE83283",
	},
	{
		pcode: 1,
		name: "Samsung Galaxy S9",
		link: "samsung-galaxy-s9",
		price: "19.990.000₫",
		old_price: "",
		color: "blue,silver,gold,pink,black",
		os: "Android Oreo 8.0",
		cpu: "4x 2.9 GHz Exynos M3 Mongoose & 4x 1.9 GHz ARM Cortex-A55",
		gpu: "Mali-G72 MP18",
		mSD: "microSD, lên đến 256 GB",
		size: "147.6 x 68.7 x 8.4 mm (5.81 x 2.70 x 0.33 in)",
		weight: "163 g (5.75 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung Super AMOLED, 16 triệu màu",
		sscreen: "5.8 inches",
		sresolution: "1440 x 2960 pixels",
		chipset: "Samsung Exynos 9 9810",
		memory: "64 GB, 4 GB RAM",
		camera: "Sau 12MP/ Trước 8MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 3000 mAh",
		image: "img/phone/s9-blue.jpg",
		qtang: "",
	},
	{
		pcode: 2,
		name: "Samsung Galaxy S9 Plus",
		link: "samsung-galaxy-s9plus",
		price: "24.990.000đ",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Oreo 8.0",
		cpu: "4x 2.9 GHz Exynos M3 Mongoose & 4x 1.9 GHz ARM Cortex-A55",
		gpu: "Mali-G72 MP18",
		mSD: "microSD, lên đến 256 GB",
		size: "158.1 x 73.8 x 8.5 mm (6.22 x 2.91 x 0.33 in)",
		weight: "189 g (6.67 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung Super AMOLED, 16 triệu màu",
		sscreen: "6.2 inches",
		sresolution: "1440 x 2960 pixels",
		chipset: "Samsung Exynos 9 9810",
		memory: "128 GB, 6 GB RAM",
		camera: "Sau 12MP + 12MP/ Trước 8MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 3500 mAh",
		image: "img/phone/s9plus-purple.jpg",
		qtang: "",
	},
	{
		pcode: 3,
		name: "Samsung Galaxy S8",
		link: "samsung-galaxy-s8",
		price: "15.990.000₫",
		old_price: "",
		color: "silver,pink,black",
		os: "Android Nougat 7.0",
		cpu: "4x 2.3 GHz Exynos M2 Mongoose & 4x 1.7 GHz ARM Cortex-A53",
		gpu: "Mali-G71 MP20",
		mSD: "microSD, lên đến 256 GB",
		size: "148.9 x 68.1 x 8 mm (5.86 x 2.68 x 0.31 in)",
		weight: "155 g (5.47 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung Super AMOLED, 16 triệu màu",
		sscreen: "5.8 inches",
		sresolution: "1440 x 2960 pixels",
		chipset: "Samsung Exynos 9 Octa 8895",
		memory: "64 GB, 4 GB RAM",
		camera: "Sau 12MP/ Trước 8MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 3000 mAh",
		image: "img/phone/s8-silver.png",
		qtang: "+ Tặng PMH 1.200.000₫ <br /> *Trả góp lãi suất 0%",
	},
	{
		pcode: 4,
		name: "Samsung Galaxy S8 Plus",
		link: "samsung-galaxy-s8plus",
		price: "17.990.000₫",
		old_price: "",
		color: "blue,silver,gold,black",
		os: "Android Nougat 7.0",
		cpu: "4x 2.3 GHz Exynos M2 Mongoose & 4x 1.7 GHz ARM Cortex-A53",
		gpu: "Mali-G71 MP20",
		mSD: "microSD, lên đến 256 GB",
		size: "159.5 x 73.4 x 8.1 mm (6.28 x 2.89 x 0.32 in)",
		weight: "173 g (6.10 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung Super AMOLED, 16 triệu màu",
		sscreen: "6.2 inches",
		sresolution: "1440 x 2960 pixels",
		chipset: "Samsung Exynos 9 Octa 8895",
		memory: "64 GB, 4 GB RAM",
		camera: "Sau 12MP/ Trước 8MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 3500 mAh",
		image: "img/phone/s8plus-blue.jpg",
		qtang: "",
	},
	{
		pcode: 5,
		name: "Samsung Galaxy Note 8",
		link: "samsung-galaxy-note8",
		price: "22.490.000₫",
		old_price: "",
		color: "silver,pink,black",
		os: "Android Nougat 7.1.1",
		cpu: "4x 2.3 GHz Exynos M2 Mongoose & 4x 1.7 GHz ARM Cortex-A53",
		gpu: "Mali-G71 MP20",
		mSD: "microSD, lên đến 256 GB",
		size: "162.5 x 74.8 x 8.6 mm (6.40 x 2.94 x 0.34 in)",
		weight: "195 g (6.88 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung Super AMOLED, 16 triệu màu",
		sscreen: "6.3 inches",
		sresolution: "1440 x 2960 pixels",
		chipset: "Samsung Exynos 9 Octa 8895",
		memory: "64 GB, 6 GB RAM",
		camera: "Sau 12MP + 12MP/ Trước 8MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 3300 mAh",
		image: "img/phone/note8-black.jpg",
		qtang: "",
	},
	{
		pcode: 6,
		name: "Samsung Galaxy A8+ (2018)",
		link: "samsung-galaxy-a8plus",
		price: "13.490.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.1.1",
		cpu: "2x 2.2 GHz ARM Cortex-A73 & 6x 1.6 GHz ARM Cortex-A53",
		gpu: "Mali-G71",
		mSD: "microSD, lên đến 256 GB",
		size: "159.9 x 75.7 x 8.3 mm (6.30 x 2.98 x 0.33 in)",
		weight: "191 g (6.74 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung Super AMOLED, 16 triệu màu",
		sscreen: "6.0 inches",
		sresolution: "1080 x 2220 pixels",
		chipset: "Samsung Exynos 7 Octa 7885",
		memory: "64 GB, 6 GB RAM",
		camera: "Sau 16MP/ Trước 16MP + 8MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 3500 mAh",
		image: "img/phone/a8plus-2018-black.jpg",
		qtang: "",
	},
	{
		pcode: 7,
		name: "Samsung Galaxy A8 (2018)",
		link: "samsung-galaxy-a8",
		price: "10.990.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.1.1",
		cpu: "2x 2.2 GHz ARM Cortex-A73 & 6x 1.6 GHz ARM Cortex-A53",
		gpu: "Mali-G71",
		mSD: "microSD, lên đến 256 GB",
		size: "149.2 x 70.6 x 8.4 mm (5.87 x 2.78 x 0.33 in)",
		weight: "172 g (6.07 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung Super AMOLED, 16 triệu màu",
		sscreen: "5.6 inches",
		sresolution: "1080 x 2220 pixels",
		chipset: "Samsung Exynos 7 Octa 7885",
		memory: "32 GB, 4 GB RAM",
		camera: "Sau 16MP/ Trước 16MP + 8MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 3000 mAh",
		image: "img/phone/a8-2018-gold.jpg",
		qtang: "",
	},
	{
		pcode: 8,
		name: "Samsung Galaxy J7+",
		link: "samsung-galaxy-j7plus",
		price: "8.690.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.1.1",
		cpu: "4x 2.39 GHz ARM Cortex-A53 & 4x 1.6 GHz ARM Cortex-A53",
		gpu: "Mali-T880 MP2",
		mSD: "microSD, lên đến 256 GB",
		size: "152.4 x 74.7 x 7.9 mm (6.00 x 2.94 x 0.31 in)",
		weight: "180 g (6.35 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung Super AMOLED, 16 triệu màu",
		sscreen: "5.5 inches",
		sresolution: "1080 x 1920 pixels",
		chipset: "MediaTek Helio P25 Lite (MT6757T)",
		memory: "32 GB, 4 GB RAM",
		camera: "Sau 13MP/ Trước 16MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 3000 mAh",
		image: "img/phone/j7plus-pink.jpg",
		qtang: "",
	},
	{
		pcode: 9,
		name: "Samsung Galaxy J7 Pro",
		link: "samsung-galaxy-j7pro",
		price: "6.490.000 ₫",
		old_price: "6.990.000 ₫",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.0",
		cpu: "8x 1.6 GHz Cortex-A53",
		gpu: "Mali-T830 MP1",
		mSD: "microSD, lên đến 256 GB",
		size: "152.5 x 74.8 x 8 mm (6.00 x 2.94 x 0.31 in)",
		weight: "181 g (6.38 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung Super AMOLED, 16 triệu màu",
		sscreen: "5.5 inches",
		sresolution: "1080 x 1920 pixels",
		chipset: "Samsung Exynos 7 Octa 7870",
		memory: "32 GB, 3 GB RAM",
		camera: "Sau 13MP/ Trước 13MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 3600 mAh",
		image: "img/phone/j7pro-pink.jpg",
		qtang: "",
	},
	{
		pcode: 10,
		name: "Apple iPhone X 64GB",
		link: "apple-iphone-x",
		price: "24.490.000₫",
		old_price: "29.990.000₫",
		color: "silver,gold,pink,black",
		os: "iOS 11",
		cpu: "2x 2.39 GHz Monsoon & 4x 2.39 GHz Mistral",
		gpu: "Apple GPU (3 lõi đồ họa)",
		mSD: "Không",
		size: "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
		weight: "174 g (6.14 oz)",
		sim: "Nano-SIM",
		sctype: "Cảm ứng điện dung OLED, 16 triệu màu",
		sscreen: "5.8 inches",
		sresolution: "1125 x 2436 pixels",
		chipset: "Apple A11 Bionic APL1W72",
		memory: "64 GB, 3 GB RAM",
		camera: "Sau 12MP + 12MP/ Trước 7MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB 2.0",
		pin: "Li-Ion 2716 mAh",
		image: "img/phone/x-silver.jpg",
		qtang: "",
	},
	{
		pcode: 11,
		name: "Apple iPhone 8 Plus 64GB",
		link: "apple-iphone-8plus",
		price: "19.690.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "iOS 11",
		cpu: "2x 2.39 GHz Monsoon & 4x 2.39 GHz Mistral",
		gpu: "Apple GPU (3 lõi đồ họa)",
		mSD: "Không",
		size: "158.4 x 78.1 x 7.5 mm (6.24 x 3.07 x 0.30 in)",
		weight: "202 g (7.13 oz)",
		sim: "Nano-SIM/ Electronic SIM (Apple e-SIM)",
		sctype: "Cảm ứng điện dung LED-backlit IPS LCD, 16 triệu màu",
		sscreen: "5.5 inches",
		sresolution: "1080 x 1920 pixels",
		chipset: "Apple A11 Bionic APL1W72",
		memory: "64 GB, 3 GB RAM",
		camera: "Sau 12MP + 12MP/ Trước 7MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB 2.0",
		pin: "Li-ion 2691 mAh",
		image: "img/phone/8plus-gold.jpg",
		qtang: "",
	},
	{
		pcode: 12,
		name: "Apple iPhone 8 64GB",
		link: "apple-iphone-8",
		price: "18.890.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "iOS 11",
		cpu: "2x 2.39 GHz Monsoon & 4x 2.39 GHz Mistral",
		gpu: "Apple GPU (3 lõi đồ họa)",
		mSD: "Không",
		size: "138.4 x 67.3 x 7.3 mm (5.45 x 2.65 x 0.29 in)",
		weight: "148 g (5.22 oz)",
		sim: "Nano-SIM/ Electronic SIM (Apple e-SIM)",
		sctype: "Cảm ứng điện dung LED-backlit IPS LCD, 16 triệu màu",
		sscreen: "4.7 inches",
		sresolution: "750 x 1334 pixels",
		chipset: "Apple A11 Bionic APL1W72",
		memory: "64 GB, 2 GB RAM",
		camera: "Sau 12MP/ Trước 7MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB 2.0",
		pin: "Li-ion 1821 mAh",
		image: "img/phone/8-silver.jpg",
		qtang: "",
	},
	{
		pcode: 13,
		name: "Apple iPhone 7 Plus 128GB",
		link: "apple-iphone-7plus",
		price: "20.190.000₫",
		old_price: "22.190.000₫",
		color: "silver,gold,pink,black",
		os: "iOS 11",
		cpu: "2x 2.34 GHz Hurricane & 2x 2.34 GHz Zephyr",
		gpu: "PowerVR Series7XT Plus (6 lõi đồ họa)",
		mSD: "Không",
		size: "158.2 x 77.9 x 7.3 mm (6.23 x 3.07 x 0.29 in)",
		weight: "188 g (6.63 oz)",
		sim: "Nano-SIM/ Electronic SIM (Apple e-SIM)",
		sctype: "Cảm ứng điện dung LED-backlit IPS LCD, 16 triệu màu",
		sscreen: "5.5 inches",
		sresolution: "1080 x 1920 pixels",
		chipset: "Apple A10 Fusion APL1W24",
		memory: "128 GB, 3 GB RAM",
		camera: "Sau 12MP + 12MP/ Trước 7MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB 2.0",
		pin: "Li-ion 2900 mAh",
		image: "img/phone/7plus-black.jpg",
		qtang: "",
	},
	{
		pcode: 14,
		name: "Apple iPhone 7 128GB",
		link: "apple-iphone-7",
		price: "16.590.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "iOS 11",
		cpu: "2x 2.34 GHz Hurricane + 2x 2.34 GHz Zephyr",
		gpu: "PowerVR Series7XT Plus (6 lõi đồ họa)",
		mSD: "Không",
		size: "138.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)",
		weight: "138 g (4.87 oz)",
		sim: "Nano-SIM/ Electronic SIM (Apple e-SIM)",
		sctype: "Cảm ứng điện dung LED-backlit IPS LCD, 16 triệu màu",
		sscreen: "4.7 inches",
		sresolution: "750 x 1334 pixels",
		chipset: "Apple A10 Fusion APL1W24",
		memory: "128 GB, 2 GB RAM",
		camera: "Sau 12MP/ Trước 7MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB 2.0",
		pin: "Li-ion 1960 mAh",
		image: "img/phone/7-red.jpg",
		qtang: "",
	},
	{
		pcode: 15,
		name: "Sony Xperia XZ2",
		link: "sony-xperia-xz",
		price: "19.990.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Oreo 8.0",
		cpu: "4x 2.8 GHz Kryo 385 Gold & 4x 1.8 GHz Kryo 385 Silver",
		gpu: "Adreno 630",
		mSD: "microSD, lên đến 400 GB",
		size: "153 x 72 x 11.1 mm (6.02 x 2.83 x 0.44 in)",
		weight: "198 g (6.98 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung IPS LCD, 16 triệu màu",
		sscreen: "5.7 inches",
		sresolution: "1080 x 2160 pixels",
		chipset: "Qualcomm MSM8998 Snapdragon 845",
		memory: "64 GB, 4 GB RAM",
		camera: "Sau 19MP/ Trước 5MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 3180 mAh",
		image: "img/phone/xz2-black.jpg",
		qtang: "",
	},
	{
		pcode: 16,
		name: "Sony Xperia XZ Premium",
		link: "sony-xperia-xzpremium",
		price: "16.990.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.1",
		cpu: "4x 2.45 GHz Kryo & 4x 1.9 GHz Kryo",
		gpu: "Adreno 540",
		mSD: "microSD, lên đến 256 GB",
		size: "156 x 77 x 7.9 mm (6.14 x 3.03 x 0.31 in)",
		weight: "195 g (6.88 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung IPS LCD, 16 triệu màu",
		sscreen: "5.46 inches",
		sresolution: "2160 x 3840 pixels",
		chipset: "Qualcomm MSM8998 Snapdragon 835",
		memory: "64 GB, 4 GB RAM",
		camera: "Sau 19MP/ Trước 13MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-Ion 3230 mAh",
		image: "img/phone/xzpremium-red.jpg",
		qtang: "* Phiên bản đỏ giá gốc <br />+ Tặng PMH 1.800.000₫",
	},
	{
		pcode: 17,
		name: "Sony Xperia XA1 Ultra",
		link: "sony-xperia-xa1ultra",
		price: "7.990.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.0",
		cpu: "4x 2.3 GHz ARM Cortex-A53 & 4x 1.6 GHz ARM Cortex-A53",
		gpu: "Mali-T880MP2",
		mSD: "microSD, lên đến 256 GB",
		size: "165 x 79 x 8.1 mm (6.50 x 3.11 x 0.32 in)",
		weight: "188 g (6.63 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung IPS LCD, 16 triệu màu",
		sscreen: "6.0 inches",
		sresolution: "1080 x 1920 pixels",
		chipset: "MediaTek Helio P20 (MT6757)",
		memory: "64 GB, 4 GB RAM",
		camera: "Sau 23MP/ Trước 16MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 2700 mAh",
		image: "img/phone/xa1ultra-white.jpg",
		qtang: "+ Tặng PMH 500.000₫",
	},
	{
		pcode: 18,
		name: "ASUS ZenFone Max Plus M1",
		link: "asus-zenphone-max-plusm1",
		price: "5.490.000 ₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.0",
		cpu: "4x 1.5 GHz ARM Cortex-A53 & 4x 1.0 GHz ARM Cortex-A53",
		gpu: "Mali-T860MP2",
		mSD: "microSD, lên đến 256 GB",
		size: "152.6 x 73 x 8.8 mm (6.01 x 2.87 x 0.35 in)",
		weight: "160 g (5.64 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung IPS LCD, 16 triệu màu",
		sscreen: "5.7 inches",
		sresolution: "1080 x 2160 pixels",
		chipset: "Mediatek MT6750T",
		memory: "32 GB, 3 GB RAM",
		camera: "Sau 16MP + 8MP/ Trước 8MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-Po 4130 mAh",
		image: "img/phone/zenfonemaxplusm1-silver.jpg",
		qtang: "+ Tặng PMH 700.000₫ <br />* Trả góp lãi suất 0%",
	},
	{
		pcode: 19,
		name: "ASUS ZenFone 4 Max Pro ZC554KL",
		link: "asus-zenphone-4max-pro",
		price: "4.990.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.0",
		cpu: "4x 1.4 GHz ARM Cortex-A53 & 4x 1.1 GHz ARM Cortex-A53",
		gpu: "Adreno 505",
		mSD: "microSD, lên đến 256 GB",
		size: "154 x 76.9 x 8.9 mm (6.06 x 3.03 x 0.35 in)",
		weight: "181 g (6.38 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung S-IPS LCD, 16 triệu màu",
		sscreen: "5.5 inches",
		sresolution: "720 x 1280 pixels",
		chipset: "Qualcomm MSM8937 Snapdragon 430",
		memory: "32 GB, 3 GB RAM",
		camera: "Sau 16MP + 5MP/ Trước 16MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-Po 5000 mAh",
		image: "img/phone/zenfone4maxzc554kl-black.jpg",
		qtang: "+ Tặng PMH 600.000₫",
	},
	{
		pcode: 20,
		name: "ASUS ZenFone 4 Selfie ZD553KL",
		link: "asus-zenphone-4selfie",
		price: "4.490.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.0",
		cpu: "4x 1.4 GHz Cortex-A53",
		gpu: "Adreno 505",
		mSD: "microSD, lên đến 256 GB",
		size: "155.7 x 75.9 x 7.9 mm (6.13 x 2.99 x 0.31 in)",
		weight: "144 g (5.08 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung IPS LCD, 16 triệu màu",
		sscreen: "5.5 inches",
		sresolution: "720 x 1280 pixels",
		chipset: "Qualcomm MSM8937 Snapdragon 430",
		memory: "64 GB, 4 GB RAM",
		camera: "Sau 16MP/ Trước 20MP + 8MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-Ion 3000 mAh",
		image: "img/phone/zenfone4selfiezd553kl-black.jpg",
		qtang: "+ Tặng PMH 500.000₫ <br />* Trả góp lãi suất 0%",
	},
	{
		pcode: 21,
		name: "Xiaomi Mi MIX 2 Special Edition",
		link: "xiaomi-mi-mix2-se",
		price: "15.990.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.1",
		cpu: "4x 2.45 GHz Kryo & 4x 1.9 GHz Kryo",
		gpu: "Adreno 540",
		mSD: "Không",
		size: "151.8 x 75.5 x 7.7 mm (5.98 x 2.97 x 0.30 in)",
		weight: "185 g (6.53 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung IPS LCD, 16 triệu màu",
		sscreen: "5.99 inches",
		sresolution: "1080 x 2160 pixels",
		chipset: "Qualcomm MSM8998 Snapdragon 835",
		memory: "128 GB, 8 GB RAM",
		camera: "Sau 12MP/ Trước 5MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB TypeC, Infrared",
		pin: "Li-Po 3400 mAh",
		image: "img/phone/mimix2-white.jpg",
		qtang: "",
	},
	{
		pcode: 22,
		name: "Xiaomi Mi 6",
		link: "xiaomi-mi-6",
		price: "10.990.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.1.1",
		cpu: "4x 2.45 GHz Kryo & 4x 1.9 GHz Kryo",
		gpu: "Adreno 540",
		mSD: "microSD, lên đến 256 GB",
		size: "145.2 x 70.5 x 7.5 mm (5.72 x 2.78 x 0.30 in)",
		weight: "168 g (5.92 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung IPS LCD, 16 triệu màu",
		sscreen: "5.15 inches",
		sresolution: "1080 x 1920 pixels",
		chipset: "Qualcomm MSM8998 Snapdragon 835",
		memory: "64 GB, 6 GB RAM",
		camera: "Sau 12MP + 12MP/ Trước 8MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB TypeC, Infrared",
		pin: "Li-Po 3350 mAh",
		image: "img/phone/mi6-black.jpg",
		qtang: "+ Tặng PMH 1.500.000₫",
	},
	{
		pcode: 23,
		name: "Xiaomi Mi A1 32GB",
		link: "xiaomi-mi-a1",
		price: "5.490.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.1.2",
		cpu: "8x 2.0 GHz Cortex-A53",
		gpu: "Adreno 506",
		mSD: "microSD, lên đến 128 GB",
		size: "155.4 x 75.8 x 7.3 mm (6.12 x 2.98 x 0.29 in)",
		weight: "165 g (5.82 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung LTPS IPS LCD, 16 triệu màu",
		sscreen: "5.5 inches",
		sresolution: "1080 x 1920 pixels",
		chipset: "Qualcomm MSM8953 Snapdragon 625",
		memory: "32 GB, 4 GB RAM",
		camera: "Sau 12MP + 12MP/ Trước 5MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C, Infrared",
		pin: "Li-ion 3080 mAh",
		image: "img/phone/mia1-black.jpg",
		qtang: "+ Tặng PMH 750.000₫",
	},
	{
		pcode: 24,
		name: "Xiaomi Redmi 5 Plus 32GB",
		link: "xiaomi-redmi-5plus",
		price: "3.990.000 ₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.1.2",
		cpu: "8x 2.0 GHz Cortex-A53",
		gpu: "Adreno 506",
		mSD: "microSD, lên đến 128 GB",
		size: "158.5 x 75.5 x 8.1 mm (6.24 x 2.97 x 0.32 in)",
		weight: "180 g (6.35 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung IPS LCD, 16 triệu màu",
		sscreen: "5.99 inches",
		sresolution: "1080 x 2160 pixels",
		chipset: "Qualcomm MSM8953 Snapdragon 625",
		memory: "32 GB, 3 GB RAM",
		camera: "Sau 12MP/ Trước 5MP",
		connect: "3G, 4G, Bluetooth, Wifi, mircoUSB, Infrared",
		pin: "Li-Po 4000 mAh",
		image: "img/phone/redmi5plus-black.jpg",
		qtang: "+ Tặng Pin dự phòng Xiaomi Mi Gen 2 10000 mAh",
	},
	{
		pcode: 25,
		name: "Xiaomi Redmi 5 16GB",
		link: "xiaomi-redmi-5",
		price: "2.760.000₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.1.2",
		cpu: "8x 1.8 GHz Cortex-A53",
		gpu: "Adreno 506",
		mSD: "microSD, lên đến 128 GB",
		size: "151.8 x 72.8 x 7.7 mm (5.98 x 2.87 x 0.30 in)",
		weight: "157 g (5.54 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung IPS LCD, 16 triệu màu",
		sscreen: "5.7 inches",
		sresolution: "720 x 1440 pixels",
		chipset: "Qualcomm Snapdragon 450",
		memory: "16 GB, 2 GB RAM",
		camera: "Sau 12MP/ Trước 5MP",
		connect: "3G, 4G, Bluetooth, Wifi, mircoUSB, Infrared",
		pin: "Li-Po 3300 mAh",
		image: "img/phone/redmi5-black.jpg",
		qtang: "",
	},
	{
		pcode: 26,
		name: "Nokia 8",
		link: "nokia-8",
		price: "12.990.000 ₫",
		old_price: "",
		color: "silver,gold,pink,black",
		os: "Android Nougat 7.1.1",
		cpu: "4x 2.5 GHz Kryo & 4x 1.8 GHz Kryo",
		gpu: "Adreno 540",
		mSD: "microSD, lên đến 256 GB",
		size: "151.5 x 73.7 x 7.9 mm (5.96 x 2.90 x 0.31 in)",
		weight: "160 g (5.64 oz)",
		sim: "2 SIM (Nano-SIM)",
		sctype: "Cảm ứng điện dung IPS LCD, 16 triệu màu",
		sscreen: "5.3 inches",
		sresolution: "1440 x 2560 pixels",
		chipset: "Qualcomm MSM8998 Snapdragon 835",
		memory: "64 GB, 4 GB RAM",
		camera: "Sau 12MP + 12MP/ Trước 13MP",
		connect: "3G, 4G, Bluetooth, Wifi, NFC, USB Type C",
		pin: "Li-ion 3090 mAh",
		image: "img/phone/nokia-8-blue.jpg",
		qtang: "+ Giá đặt biệt 9.990.000₫ <br />+ Tặng Pin DP 10.000mAh <br />* Trả góp lãi suất 0%",
	}
];