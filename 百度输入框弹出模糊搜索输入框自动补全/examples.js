$(document).ready(function() {

  // 基础
  // ----------

  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;
      matches = [];
      substrRegex = new RegExp(q, 'i');
      $.each(strs, function(i, str) {
        if (substrRegex.test(str.estateName)) {
          matches.push(str.estateName);
        }
      });
      cb(matches);
    };
  };

  var states =[{"estateName":"“树园新苑”配套动迁商品房一期1#-12#房及配套设施","keyId":"FF8767D1-D386-40F6-A0AB-77FDCD29883E"},{"estateName":"“树园新苑”配套商品房二期（13#-20#）","keyId":"6ED6DAF7-AEF5-4D44-BE80-779EC1D9E6EE"},{"estateName":"万里2期-巴黎之春","keyId":"AD3D5152-7FAA-4609-BCCE-C825C1F91480"},{"estateName":"上海国际机电五金交易中心二期(暂定名)2","keyId":"8E1936BC-8DC6-4ED3-98ED-9E4EBB8B5F53"},{"estateName":"上海市长兴岛配套商品房基地（镇西区）2号地块（北块）","keyId":"9F20BE6A-9648-4C5C-AB17-53167320F2EB"},{"estateName":"上海浦东国际服装服饰时尚中心2","keyId":"9D9CF48F-D813-450F-91CC-00A6A59C05D7"},{"estateName":"上海电器城一期(东块)、东块地下车库人防(2#地下室)","keyId":"5D4026B2-2FCA-45BD-831E-137B315C83C2"},{"estateName":"上海金山国际贸易城62号楼","keyId":"08B43484-D8A6-4727-B3C0-509D951D1F33"},{"estateName":"上海金桥出口加工区软件园一期G2-18#地块研发楼","keyId":"C13BE538-ECA1-4607-9634-20C1AA2821E2"},{"estateName":"中星海上名豪苑二期-2","keyId":"54425D4E-2553-41E3-94F9-655AA5CB5879"},{"estateName":"丽泽梅傲苑（临港书院社区三期-2动迁安置基地东块）","keyId":"0313E9F9-5D53-493D-9509-80CC24127CEC"},{"estateName":"丽泽菊清苑（三期-2动迁安置基地西区）","keyId":"A7FF6D52-7D63-4815-AD4D-7340E85AE843"},{"estateName":"云山星座苑2","keyId":"257AFF4D-F86E-4997-9F96-5D281A8C8745"},{"estateName":"五星花园24#57#住宅及商业房","keyId":"EFB6D6EE-5F6E-4180-A9D5-34F08339C77D"},{"estateName":"亭林大型居住社区安置基地一期北部动迁安置房（57/2丘）","keyId":"71E2C1F0-3A77-4AB3-A313-2BE8E9BD3F0D"},{"estateName":"亭林镇5街坊P2宗地（东地块）配套商品房","keyId":"5B52B81A-A495-4ECE-8EB8-95651C844401"},{"estateName":"众旺苑23#、24#、29#、30#、31#、32#商品房","keyId":"823E0658-DB48-4C93-BA26-9BFD11E85D94"},{"estateName":"保利家园C12地块商业项目（台北风情街）","keyId":"20583D96-7429-41D0-BFC9-1403093FEB57"},{"estateName":"保利御樽苑（A-8-12地块）","keyId":"4F7DD887-E3BB-49EC-8004-C3A119CA6A38"},{"estateName":"保利林语溪苑（高层-2）","keyId":"84F2AEF1-827C-40AB-87AD-DBEE4F7CE5DF"},{"estateName":"光明旧房改建1、2号","keyId":"467C39DB-A60E-4E6F-A988-1A71A0F271D1"},{"estateName":"公寓式办公楼1，公寓式办公楼2","keyId":"5A45C73B-9615-4F76-9858-4F4184A55767"},{"estateName":"利津路255号","keyId":"4D4298FA-B5FE-4784-BDCA-BD354441EDEA"},{"estateName":"加枫路20号","keyId":"B6B85A9A-BE88-4049-8408-80F2C31332DD"},{"estateName":"北中路280弄","keyId":"1D3ACA08-478F-4945-B285-E7D6B9C2B874"},{"estateName":"北大街280弄","keyId":"EC23F42E-8BE6-4848-A5EE-270D52719714"},{"estateName":"华坪路23号旧房改造","keyId":"8BBA1B19-9BF1-42D7-9D8F-D52A776FBC65"},{"estateName":"华钜御庭（A15-2，15-7地块）","keyId":"4D33986C-91DE-46C4-AA19-C7BFCDE69347"},{"estateName":"南翔镇5街坊7/29丘建造动迁配套商品房","keyId":"FB6F7A36-1034-470D-9444-4B1117CDA564"},{"estateName":"南郊花园2","keyId":"165E36F8-478A-4221-B851-1A6E04AB3E9A"},{"estateName":"博园村（堡镇10号地块）二期工程-2工程","keyId":"BEC9FD4E-8D5C-4F51-ACBB-208D79FCF995"},{"estateName":"双秀家园32号","keyId":"CE302252-0EE0-4187-A4E6-CEBD2E548807"},{"estateName":"同济城市雅筑（2）","keyId":"E199B4FD-2A41-4B6B-AF9C-44CCC3069AA3"},{"estateName":"吕巷镇荡田村（2号地块）三期配套商品房","keyId":"22581CA1-C970-4B9F-A41A-41B7D8ACE6A0"},{"estateName":"君莲小区G-2地块3#沿街商业","keyId":"4D2BBD88-B99F-4E51-AAB7-0FAF3DCF47DB"},{"estateName":"周浦老镇改造六号地块二期（2号楼）","keyId":"A691EC1F-A862-4EFA-B64C-9F19B19E7819"},{"estateName":"周浦镇中市社区西块商业用房2号3号5号6号7号8号9号10号","keyId":"B1739469-0183-4772-B6BE-A76B87931BA5"},{"estateName":"和盈商务广场（马陆星级宾馆地块商业办公项目2#-5#房）","keyId":"D90E405B-6358-4A3B-B5AD-EC0908E78D12"},{"estateName":"嘉定云翔大型居住社区动迁配套基地28-01地块","keyId":"9CE17E4F-2686-4576-9BF0-2419657118BD"},{"estateName":"国信安基地5-2-1地块创意中心二期工程","keyId":"FB9637F7-8FC9-49B9-BE71-31C7B6A12A50"},{"estateName":"圣鑫苑一期1街坊2","keyId":"F5EFD2B3-C54C-4B19-8DFD-BA17D05344A3"},{"estateName":"城中东路480、482号，青松路84、86号","keyId":"127E292D-1CE8-4D22-A550-9EEADF3E31A9"},{"estateName":"城桥新城6#－1地块动迁安置房项目183/2","keyId":"0F97A958-3CE2-4775-ABC6-17A3BE38DDE6"},{"estateName":"城桥新城8#－1地块动迁安置房项目184/2","keyId":"6CDCA55D-7672-4E6E-B28F-D44DDAE9BF11"},{"estateName":"堡镇镇12号地块二期","keyId":"2E6E86D5-AF3E-43EF-A41E-59CCDAF8E06A"},{"estateName":"夏阳金城2","keyId":"C3A00C72-8650-4B81-97D7-59FDD4E72255"},{"estateName":"外滩国际金融服务中心(2)","keyId":"995D1598-174C-47BF-B6CB-6B1727A3A049"},{"estateName":"外滩搜候广场（黄浦区204地块项目）","keyId":"D620B4B3-3EA5-4144-AE8D-D4863C43CEBE"},{"estateName":"外高桥保税区F20-7地块86#通用生产研发楼","keyId":"E35EA91D-00B9-4D98-9AB5-DD3809EC97C4"},{"estateName":"外高桥保税区德堡路215号","keyId":"1F425385-B65F-4A4B-8EFB-925116475647"},{"estateName":"大华锦绣华城2-6地块住宅项目","keyId":"36B56289-7748-4C89-BAB1-485D41332FF7"},{"estateName":"奉贤区庄行镇1542号地块配套商品房（庄行茗苑）","keyId":"F825692E-4378-4BFB-9258-728396265CBE"},{"estateName":"好第坊2","keyId":"BAAEB539-0E72-43B3-A465-A2C5C06D37C3"},{"estateName":"安亭新镇一期20A-02A地块商品住宅项目","keyId":"9A4A3BA6-82B7-4A12-BFE4-CDCFC3CAC813"},{"estateName":"安亭新镇一期21A-01A地块商品住宅项目","keyId":"7DC1BD11-E02B-425D-8845-ED57E2DC7BA4"},{"estateName":"宜山路2328弄人防地下车库","keyId":"14B53025-E1D9-4DEF-91E6-6B35A13B9ECD"},{"estateName":"宝山区庙行镇场北村共康北二块住宅区经济适用房10-2地块","keyId":"12FF05E7-B732-4BC9-A8F5-D707D793139E"},{"estateName":"宝山区顾村镇新选址2号基地1号地块配套商业项目（A8地块）","keyId":"BC3F2709-A6B3-450C-96CB-A2453A108C76"},{"estateName":"宝山区顾村镇新选址2号基地1号地块配套商业项目（C3地块）","keyId":"43350A57-F6C0-4C9B-8220-B28188A66C9F"},{"estateName":"宝山顾村新选址1号基地B2-2地块","keyId":"A3A04221-8934-4552-8D04-4FE5014BB34C"},{"estateName":"富特北路219号","keyId":"6208A408-61BA-46CD-B412-1E8F145A4804"},{"estateName":"富特北路520号","keyId":"A564CB94-1A1A-4CF0-93D2-C1B0B7550BD8"},{"estateName":"尚汇豪庭2期","keyId":"9C09227F-A752-455A-A2C6-17A8BB4DF95E"},{"estateName":"山鑫联城1#、2#商业房","keyId":"FF8BA5D2-345A-4CA7-930E-375B68FBBA2F"},{"estateName":"崇明县城桥镇04、05单元0508B-02地块商品住宅项目","keyId":"2F1318BA-A1C7-431D-B1F7-3EE6913AEA30"},{"estateName":"崇明县港西镇133/2宗地1#商业（昱墅酒店）","keyId":"B2C7D861-9BF6-46EA-9FC6-1CADCABAEB69"},{"estateName":"崇明县港西镇133/2宗地2#～5#商业项目","keyId":"DC9E3DCE-E650-4834-B819-9558DE35AC3D"},{"estateName":"崇明县陈家镇滨江生态休闲运动居住社区2号B区","keyId":"BDEBA4AD-7E02-4F7A-9B8F-AC94C0535F99"},{"estateName":"崇明县陈家镇滨江生态休闲运动居住社区2号B区（览海高尔夫别墅）","keyId":"05532BF7-5A20-4853-BF0A-14BEE81229E8"},{"estateName":"崇明新城18号一期地块（第一批）（2）","keyId":"C79DD152-F2A5-4E4F-ADBB-1AC7EAC4FE20"},{"estateName":"崇明新城18号一期地块（第二批）（10A02A地块）","keyId":"DCD727DC-628C-497A-8FCF-04D771159F93"},{"estateName":"川沙镇55街坊29宗","keyId":"B05F5ECB-44BA-4E37-8007-53C2CDAD6FF8"},{"estateName":"市光路1262-1280号项目","keyId":"1FB1B335-FC44-40CD-B297-299944C85402"},{"estateName":"市北工业新区13-2号地块新建商业厂房","keyId":"A7B0C47F-F800-4340-95D1-F006EA98AE55"},{"estateName":"平民后村42-49号","keyId":"F81127A7-7720-45FC-A947-14714118BECE"},{"estateName":"庄行镇3街坊28/2丘商住项目","keyId":"A8C7964F-0389-474D-A18E-7680C9E98AC4"},{"estateName":"康兴苑2","keyId":"85E9FB17-54B1-4ADC-BAC9-09C21C8233DD"},{"estateName":"惠南镇西乐路273弄","keyId":"51433A50-5E09-4770-95A3-F3C8DAAB00F5"},{"estateName":"愚园路627弄等","keyId":"67386654-8A3B-47F8-9B1B-126E9FA953F3"},{"estateName":"文怡花园2","keyId":"2892FEF7-3322-49B3-A252-198C094D5C15"},{"estateName":"新南家园2","keyId":"4CC81E89-B747-45A6-9344-5001EBF2BC2E"},{"estateName":"新南家园28#、30#、35#、36#房","keyId":"624D4171-3C95-4703-9F63-748E40276125"},{"estateName":"新南家园28、30、36号","keyId":"DB2BFF02-1285-4FFF-805E-764AE4A87586"},{"estateName":"新城18号二期地块（181/2丘）","keyId":"56900D76-606A-4D21-BA17-6D4596AEB18A"},{"estateName":"新城23号商品住宅","keyId":"17151FCA-A681-4062-BAD3-12B46B5D007A"},{"estateName":"新城23号商品住宅（44幢）","keyId":"BA98DA53-FF3A-486D-A166-9BC848E80E9F"},{"estateName":"新城明月苑（21#地块配套商品房）","keyId":"983C6B63-73E4-4AF9-BA03-7445B8FE2750"},{"estateName":"新梅共和城一期东块1号楼（12幢）","keyId":"D509BC22-484D-4BD1-BCB3-9C82BBBFA8A4"},{"estateName":"新梅共和城一期东块2#楼","keyId":"F8BD4210-3FF0-422D-A318-799335C9D02F"},{"estateName":"新浦江城122-4号地块商业项目","keyId":"EAC95435-BC7A-4A27-ABBD-55FEED16D9E5"},{"estateName":"新浦江城123-2地块商业中心","keyId":"4BF563D7-4E3D-4ED0-B4E0-1DC8D39BEA85"},{"estateName":"新浦江城123-4号地块商业项目（一期）","keyId":"71CF2E71-86D8-4F6B-8E3B-6E84B79A77A1"},{"estateName":"新源路244-286号","keyId":"E4FBB814-BB3D-4241-8D8E-7A1908994C24"},{"estateName":"昌里东路602-736号（双）","keyId":"96D2FBAE-19AA-4577-BF0E-D7B344962803"},{"estateName":"明园森林都市2期（30#房）","keyId":"AA63CC71-D00B-43B1-8182-94B7D8764701"},{"estateName":"星辰园2","keyId":"8751FDBB-A536-48AF-BA8A-74EAC59CB04C"},{"estateName":"春申路2801号1-3层","keyId":"0C932D41-5A54-4222-97D6-967E5C3796DA"},{"estateName":"昱翠家苑（26#楼）","keyId":"E3B14E40-B55C-431A-BD62-BF56F52EF7B3"},{"estateName":"普康苑20#.21#房","keyId":"C03137AA-F567-4E4F-BD92-29DE7425C433"},{"estateName":"曹杨路289-293号","keyId":"0B0FAE67-2162-404B-AD86-F6F50164778D"},{"estateName":"朱泾镇320国道南C1地块商品房项目","keyId":"C6A62864-1A14-466B-A728-045305E40B48"},{"estateName":"朱泾镇320国道南C2地块商品房项目","keyId":"1BECC3DD-F324-427F-8226-8A654CC43DBB"},{"estateName":"朱泾镇秀洲阁项目2","keyId":"1F6EE4B2-8F6D-458B-A12D-7C037A2AC201"},{"estateName":"松江区环城路2-66号旧城改造工程","keyId":"41B8668E-46DF-4D00-B228-C5B4BAD75A4F"},{"estateName":"松江区环城路旧城改造2","keyId":"8AD902C1-9B0D-488B-AEE7-ECD284DB458A"},{"estateName":"格力H2O","keyId":"88F5C887-987E-4333-94D9-DDCAF1848DC6"},{"estateName":"梅川路291-301（单）号","keyId":"492AD37C-3CCC-422E-AFEB-C75CDBA8ECE3"},{"estateName":"森海豪庭2","keyId":"4922D3C1-CD2D-4428-8928-CD2EA2C63B03"},{"estateName":"武宁南路322号（地下车库）","keyId":"FF85C30C-3DCF-42E8-B2CF-899011590313"},{"estateName":"武宁南路323、333号","keyId":"83E98772-E3B4-4781-A28D-A546C4362784"},{"estateName":"民惠佳苑二期1、2、3、5地块","keyId":"58C9B687-3761-4D9E-A047-7FA74E025926"},{"estateName":"永泰路1155、1205号","keyId":"F0650A41-2A7A-46AC-8E32-CC4140153E07"},{"estateName":"汇丽花园二期2","keyId":"11A4CD51-00F3-440B-B4B8-D5E88EE5C880"},{"estateName":"汇佳新苑2","keyId":"30C10F75-CA35-46A9-A7F6-E0195A14B6FF"},{"estateName":"江海名都（崇明新城24号地块商品住宅1-4期）","keyId":"1E14B5F3-1B29-4BAA-BC46-EB6A82C329C8"},{"estateName":"泥城社区三期A动迁住宅安置基地Q-2地块","keyId":"47957D8A-57DC-46BE-A848-E768B2A6847F"},{"estateName":"泰燕华庭2","keyId":"C7F76830-DD28-4121-A5F1-087CA1BF405C"},{"estateName":"浦东T2walk社区步行街","keyId":"66D8FF61-8DE1-4762-9CBE-36097A087662"},{"estateName":"浦东行政文化中心2-6地块办公室","keyId":"A22276B3-B76C-4DFC-B886-BB265554BE63"},{"estateName":"浦东软件园三期H2地块SOHO楼研发用房及配套工程","keyId":"7D0AA30B-F49A-4165-A195-9B1ED2BB42C6"},{"estateName":"浦江坤庭（125-4地块）","keyId":"F4335DC6-ABE4-4C73-825B-146DCDC2DD6C"},{"estateName":"浦江坤庭（125-4地块）商业","keyId":"52657093-EFC8-4941-9A95-138CC80F989F"},{"estateName":"浦江坤庭（125-4）地块商业","keyId":"03BF58EE-306D-46B2-AE57-BA204192167F"},{"estateName":"浦江镇120-L地块商业楼","keyId":"CA37DF47-842A-4656-9FCB-55C5708DDA63"},{"estateName":"海欣家园（1#、2#商业用房）","keyId":"B6AB0FF3-E497-4E04-9711-56D2F1B87D4D"},{"estateName":"海湾艺墅二期2","keyId":"62214CDE-5871-482C-A3AA-31E9303A5424"},{"estateName":"港澳路271号3幢","keyId":"4E0CA6CF-9F9D-4BE8-92E4-8D3F5DB828D7"},{"estateName":"滨河华城三期商业2","keyId":"3BC466CE-A784-4706-8D6A-40B729BC3B7B"},{"estateName":"灵岩南路1062-1068号（双）项目","keyId":"81C8A076-BEAB-4B90-9665-122192854413"},{"estateName":"现代华亭花园住宅小区2","keyId":"11FA074A-DDA1-4DD4-BA4E-8254397F914D"},{"estateName":"珠江新城2","keyId":"2DF07C7E-6C8B-4C40-8928-7C032A0A4731"},{"estateName":"珠溪苑二期1号、2号住宅楼","keyId":"C940BD9D-B051-4FC4-8327-FB9B318FCDA7"},{"estateName":"瑞虹新城2期","keyId":"6D69A1FC-B741-4B2F-8401-15C489F3BCC5"},{"estateName":"碧泉路118、128号","keyId":"EB01F844-9BDD-4374-B78C-EED69907E39B"},{"estateName":"碧波路328号火炬园","keyId":"7D9A923B-71F7-44E3-9573-DFA46A0486EE"},{"estateName":"祥腾假日风情商业广场2","keyId":"3F5D84AE-FF6E-46DC-AC61-00CF99E8B1ED"},{"estateName":"秀康新城达城锦园2","keyId":"127412EC-9DCA-47DD-9CAD-557108616E2B"},{"estateName":"竖新北路82号","keyId":"CDBD4617-E4E0-4B70-915A-71752C253F4A"},{"estateName":"竖新镇竖新南路280弄2号、3号","keyId":"107667A7-74DA-46D1-A1DA-742DDCDE8479"},{"estateName":"粤亮湾景苑2","keyId":"85326C0D-A5F9-4801-B2D0-B46AC053C577"},{"estateName":"紫迪兰庭（张堰镇0004街坊118/26丘）","keyId":"5ACF3918-7872-4E34-A009-BC182E2F5420"},{"estateName":"紫迪兰庭（张堰镇0004街坊118/28丘）","keyId":"2E123545-E189-4CD0-A4F8-1B4C56640EDC"},{"estateName":"红菱苑2","keyId":"5B1F5C5C-EA9B-45E9-9F82-F8DC94EEAA30"},{"estateName":"绿地南桥新苑12","keyId":"B1B66936-8866-4C3D-A859-BBA25E95CD48"},{"estateName":"绿地观邸2期","keyId":"458EFA61-0586-4506-87E5-637843D01EE7"},{"estateName":"绿地金卫新家园（一号地块商业2）","keyId":"B3EDD9EF-3069-41A6-83E4-4DF5973DF5B6"},{"estateName":"绿洲中环中心1号楼、2号楼","keyId":"9583B484-6FA3-4892-BA60-C5452D2487EC"},{"estateName":"绿舟星城18#、19#、20#、21#、22#、23#楼","keyId":"D5E5DBC1-DC8B-4F66-9E39-ABA9D51E9C41"},{"estateName":"绿舟星城24#、25#、49#—51#","keyId":"E2B03A03-905C-46F7-B4AB-8D2111A78DFF"},{"estateName":"绿舟星城29#楼，30#楼，31#楼，32#楼","keyId":"536EA03B-5D98-4D91-A83D-B366331E96A2"},{"estateName":"绿色家园1#、4#、5#、8#、9#、12#、13#会所","keyId":"743ACBD9-BEFC-43F8-BBB7-D94E31F9B944"},{"estateName":"美桂南路331号，德堡路273号","keyId":"22F5DF07-3610-445A-A0DF-10A3F3563BE9"},{"estateName":"翔川家园（55街坊102宗）","keyId":"8486D099-8253-4AE3-8835-42E24AC198C1"},{"estateName":"翡冷翠园127-1地块","keyId":"CCD3B994-7B22-47B2-91EE-60E3C249F839"},{"estateName":"翡冷翠园（127-1地块）","keyId":"C5F3CAF6-72BB-4FE4-A4D3-2DE1E346023D"},{"estateName":"老西门中华新城（北块）1#、2#楼","keyId":"FA5167DF-F232-49C0-B74A-2A7014A31D61"},{"estateName":"老西门公馆（1#、2#楼）","keyId":"0BC30A57-2A49-45BE-8182-26BEE9103CA6"},{"estateName":"花木镇9街坊27/1宗地块","keyId":"4E1803AD-6172-49FB-8C0A-E9201AA48174"},{"estateName":"英伦路412号","keyId":"06FC5357-236A-40A3-AEAE-562F54CD15D5"},{"estateName":"虹口区82号地块南区商办楼(玫瑰购物广场)","keyId":"35A9F67D-048C-4E88-90C3-1BCB273644D5"},{"estateName":"虹桥富力悦都（9-1,9-2号楼）","keyId":"25222E7C-B255-4D05-AF66-1A0A0873CDC9"},{"estateName":"虹桥路2386号","keyId":"92C03596-00ED-4038-866E-6F25180C2754"},{"estateName":"运河北路1296弄","keyId":"D6822ACF-B1C2-42C8-B6FF-46DB715BD291"},{"estateName":"都会路2799弄1-20号","keyId":"D0516289-6FA7-4647-8D7D-890F8F6CA1A0"},{"estateName":"金山区吕巷荡田新村安置小区1,2期配置商品房","keyId":"46924183-6A2B-4970-9905-3E96CD1D804A"},{"estateName":"金山区张堰镇21.23街坊旧改项目（一期）1","keyId":"4FCACA41-0E8E-48C8-899F-64EC9760C2AF"},{"estateName":"金山工业区JSS3-0402单元06-04地块（一期）商品房项目","keyId":"4B2FC56A-0FDC-4BAE-B451-18AC1A27B928"},{"estateName":"金山新城区A20-2地块商品房项目31/6宗地地块","keyId":"F9253199-21E2-484B-AED1-45D2059A72C2"},{"estateName":"金山新城区B20地块海望涌金步行街","keyId":"086A2EBF-15FD-42D7-A10D-338F8C97BD8D"},{"estateName":"金山红星国际广场（1#—2#）","keyId":"0911E82D-7B47-41A8-8AA3-25A0F2E44110"},{"estateName":"金桥72号地块标准厂房及管理服务中心","keyId":"0ED23743-9646-4001-8D6E-A230ADC64240"},{"estateName":"金桥裕安工业园2号厂房","keyId":"E514B851-A4A9-487A-B4B1-20DB9EBD62A5"},{"estateName":"金梅雅苑7#、8#、11#、12#","keyId":"D2C8F633-3D80-41F3-99FD-2386B4A167D2"},{"estateName":"金瀚园QJ2#楼、QJ门卫","keyId":"EDCF66F0-25FA-4021-8B85-B9A6A5EA0B20"},{"estateName":"金高路1058弄26-37号","keyId":"F74B4769-011B-4A79-811A-86FA80849B84"},{"estateName":"钦州北路1198号82幢","keyId":"1C46CCCB-7E8B-4A99-A7E0-0ACD57E0FB05"},{"estateName":"银山路200弄1-71号","keyId":"DCAB49C1-0522-4248-A545-BC4B11AD38FC"},{"estateName":"锦秋花园八期地下车库2期地块","keyId":"E1BA12B2-11A9-4883-A016-A02F7553E8CD"},{"estateName":"锦绣天第花园21","keyId":"F76EFB54-4D1B-4086-B925-FCB3EBC29AF1"},{"estateName":"长兴圆沙2号地块第一、第二期配套住宅项目","keyId":"A61D717C-7263-448F-81F6-2E60EC8622D0"},{"estateName":"长兴岛圆沙社区12-05地块商品住宅新建项目","keyId":"9282E79D-9889-4145-8287-BE3C52F25B08"},{"estateName":"长兴岛圆沙社区动迁安置房09-02地块项目","keyId":"29A7DB8A-C5F9-468A-884A-D8E73ABEDA5E"},{"estateName":"长阳路2080号","keyId":"4D0C91B1-F31A-4FBB-995C-4410DE96FF29"},{"estateName":"长风2号西地块I楼","keyId":"6101E359-F563-44AF-8781-EE050F10E160"},{"estateName":"长风2号（西）地块--I幢办公楼工程","keyId":"FF21E5F7-C019-49F5-8900-881555D17E57"},{"estateName":"长风地区2号（西）地块--E、K幢办公楼工程","keyId":"3D088C5F-E087-4B7D-B10C-8C236F6F1FEA"},{"estateName":"长风地区2号（西）地块工程--G、H幢办公楼","keyId":"2A05A6A1-A359-438F-B7D4-00646C4DDF5C"},{"estateName":"闸北279街坊商品住宅项目（天祥琴苑）","keyId":"7554C145-D98E-4E54-BA1E-5ADF1230F040"},{"estateName":"阳光园一期20#","keyId":"AFA111D2-3015-4AD7-985D-E61BD2977FDE"},{"estateName":"陈家镇滨江生态休闲运动居住社区2号地块A区商品住宅","keyId":"29813865-6851-411E-B5CD-7969E3CDEB85"},{"estateName":"青浦佳乐苑2","keyId":"9D57C021-A018-4A32-A04F-ABCACC5580B2"},{"estateName":"静安风华苑2","keyId":"9312C32C-F3F0-4228-8C95-3138CD8E98EA"},{"estateName":"顾村新选址1号基地一期A5-2地块社区商业服务设施","keyId":"D8DC8468-A8C4-4C51-A495-DEF44ED7BDD4"},{"estateName":"顾浦河以东、吴淞江以北地块（03B-12、03B-13)建造普通商品房项目","keyId":"B37AA37A-DC61-442F-AB29-CFF8BB5717CD"},{"estateName":"颐峰苑2","keyId":"F69B2DB9-69CF-4BF9-83E4-4BCF2F7889A9"},{"estateName":"高青路2671号","keyId":"CCF21770-F038-4245-8BC9-A6E0909D2DC8"},{"estateName":"黄浦区五里桥街道99街坊2/2商办地块","keyId":"8AD7E0F7-A782-4F2D-A9D2-9B2FC8E0E8F4"},{"estateName":"龙柏二村254-261号","keyId":"D966EF9A-4AB8-40EC-95C5-143E72A56431"}];

  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,//显示文本的元素
    minLength: 1//建议开始渲染之前所需的最小字符长度
  },
  {
    limit: 5,//列表中显示数量
    name: 'states',
    source: substringMatcher(states)//处理数据，返回结果
  });



  // 预处理
  // --------

  var countries = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: 'data/countries.json'//预处理
  });

  $('#prefetch .typeahead').typeahead(null, {
    name: 'countries',
    source: countries,
      limit: 10
  });

  // 远程获取数据
  // ------

  var bestPictures = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: 'data/post_1960.json',// 预处理
    remote: {
      url: '../data/films/queries/%QUERY.json',
      wildcard: '%QUERY'
    }
  });

  $('#remote .typeahead').typeahead(null, {
    name: 'best-pictures',
    display: 'value',
    source: bestPictures
  });

  // Bloodhound插件对数据处理
  // -------------------

  var nflTeams = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    identify: function(obj) { return obj.team; },//会数据进行处理，这个是获取数据中的team
    prefetch: 'data/nfl.json'
  });

  function nflTeamsWithDefaults(q, sync) {
    if (q === '') {
      sync(nflTeams.get('Detroit Lions', 'Green Bay Packers', 'Chicago Bears'));
    }

    else {
      nflTeams.search(q, sync);
    }
  }

  $('#default-suggestions .typeahead').typeahead({
    minLength: 0,
    highlight: true
  },
  {
    name: 'nfl-teams',
    display: 'team',
    source: nflTeamsWithDefaults
  });

  // 模板
  // ----------------

  $('#custom-templates .typeahead').typeahead(null, {
    name: 'best-pictures',
    display: 'value',
    source: bestPictures,
    templates: {
      empty: [
        '<div class="empty-message">',
          'unable to find any Best Picture winners that match the current query',
        '</div>'
      ].join('\n'),
      suggestion: Handlebars.compile('<div><strong>{{value}}</strong> – {{year}}</div>')//这个是使用Handlebars模板
    }
  });

  // 多个数据源
  // -----------------

  var nbaTeams = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: 'data/nba.json'
  });

  var nhlTeams = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: 'data/nhl.json'
  });

  $('#multiple-datasets .typeahead').typeahead({
    highlight: true
  },
  {
    name: 'nba-teams',
    display: 'team',
    source: nbaTeams,
    templates: {
      header: '<h3 class="league-name">NBA Teams</h3>'
    }
  },
  {
    name: 'nhl-teams',
    display: 'team',
    source: nhlTeams,
    templates: {
      header: '<h3 class="league-name">NHL Teams</h3>'
    }
  });

  // 自定义下拉滑动选择（自己写样式）
  // ------------------------

  $('#scrollable-dropdown-menu .typeahead').typeahead(null, {
    name: 'countries',
    limit: 10,
    source: countries
  });

});
