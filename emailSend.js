var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'moore3dev@gmail.com',
      pass: 'xqlk gdqu rbvq aanq'
    }
  });
  
  //
  // defining connections
  //
  
  const send = (adds) => {
      console.log(adds);
      const addy = adds
      var mailOptions = {
        from: 'moore3dev@gmail.com',
        to: addy,
        subject: 'I designed a new homepage for you',
        text: 'Hi, \n \n I hope this message finds you well. My name is Finley Moore and Im a freelance web developer. \n \n I have made a bespoke home page that can enhance user experience and help you stand out. If you are interested in my offer I would love to share the design and receive your feedback. \n \n Looking forward to hear your thoughts  \n \n Best Regards, \n Finley Moore, \n moore3.vercel.app ',
      };
  
      transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  var emailArr = ['lhelectricalservices01@gmail.com',
'Team@electricalfolks.co.uk',
'rmsgmep@gmail.com',
'ross@rsselectrical.co.uk',
'info@birmingham-electricalservices.co.ukWaste',
'info@techfixelectric.co.uk',
'info@qkhan.co.uk',
'enquiries@abelectrical-birmingham.co.uk',
'contactus@evivaservices.co.uk',
'info@mharperelectrical.co.uk',
'9007info@ubitec.co.ukSisefield',
'info@ffrelectricalservices.co.uk',
'ljtelectricalcontractors@hotmail.com',
'info@mainlineelectric.co.uk',
'Contractingcontact@fodenelectrical.comPHONE',
'info@testeam.co.uk',
'filler@godaddy.comHomeServicesContact',
'827538terry@whitehouseelectrical.comA',
'info@testeam.co.uk',
'info@ecelectrical.co.uk',
'nassar180@gmail.com',
'office@ableelectric.co.uk',
'527187x2electrical@hotmail.comDesigned',
'sales@centralelectricalsystems.co.uk',
'contact@midwestcityelectricals.comCALL',
'info@diversesparksltd.co.uk',
'westerngaselectric@gmail.com',
'office@rchelectrical.co.uk',
'info@phadams.co.uk',
'info@midlandplus.co.uk',
'pageinfo@sgtelectrical.co.uk',
'info@abselectricalltd.co.uk',
'ammoniteelectrical@gmail.com.Location',
'admin@ceslimited.uk.com',
'enquiries@elyte-electrical.co.ukGet',
'hello@modernlightingandelectrical.co.uk',
'info@iwantsands.co.uk',
'info@hawneelec.co.uk',
'imanelectricals@live.co.ukAREAS',
'phase3elec@yahoo.com',
'aims.electrical78@gmail.com',
'Info@Bradmet.co.uk',
'568059electric_touchs@yahoo.co.uk',
'jchelectrical@talktalk.net',
'info@ihdelectrical.co.uk',
'quickfixelectricalservices@gmail.com',
'ASHLEY@AGRELECTRICS.CO.UK',
'info@wiredleeds.co.uk',
'luke@fieldingelectrical.co.uk',
'office@abbcell.co.uk',
'852456Eicrelectrical1@gmail.comSaleseicrelectrical',
'Info@PowerGenElectrical.co.uk',
'djw-electrical@outlook.com',
'info@heatcare247.co.uk',
'info@gtoddelectrical.co.uk',
'service@service-electrical.co.uk',
'info@ajs-electrical.co.uk',
'sam.elec.contractors@gmail.com',
'westyorkselectricalservices@gmail.com',
'talktous@polarelectricalservices.com',
'397570Gary@samcoelectrical.co.uk',
'items.andysagar94@gmail.com',
'contact@hodgsonelectrical.com',
'eltechelectricalservices@gmail.com',
'talktous@polarelectricalservices.com',
'enquiries@pittswilson.com',
'pg@mce-electrical.co.uk',
'enquiries@rpearsonelectricalandplumbing.co.uk',
'info@martinbellelectrical.co.uk',
'enquiries@cerelectrical.co.uk',
'sales@bnelectrical.com',
'info@bishopelectrical.co.uk',
'John@jpbaldwinelectrical.co.ukBack',
'chris@cjelectrical.net',
'info@alectrifix.co.uk',
'dylanclark@example.com',
'Ltdinfo@stonewoodelectrical.comTel',
'contact@kelectrix.co.uk',
'john@butterfieldselectrical.comGet',
'info@rdelectricalsw.co.uk',
'info@hbelectricalbristol.co.ukSubscribe',
'engitech@oceanthemes.net',
'voyelectrical@gmail.com',
'info@elelectricalservices.co.uk',
'burridgeec@outlook.com',
'engitech@oceanthemes.net',
'info.electrolights@gmail.com',
'5555551.800.555.6789support@yoursite.com',
'706097stephen@cleverspark.co.uk',
'info@electrician-bristol.co',
'gwelec@live.co.uk',
'sales@rygol.co.uk',
'803Info@homesafeelectrical.co.ukHomeOur',
'info@bradleystokeelectrical.co.uk',
'info@electricianlocal2u.co.ukSendThanks',
'info@vectorelectric.co.uk',
'298leroy@charnickelectrical.co.uk',
'enquiries@sageelectrical.co.uk',
'srelectricalsouthwestltd@hotmail.co.uk',
'info@bristolphoenixgroup.co.uk',
'hello@essemelectrical.co.uk',
'enquiries@rolandjbellelectrical.com',
'connectelectrician@gmail.com',
'kobecelectrical@gmail.com',
'info@mtaylorelectrical.co.uk',
'info@colvettaelectrical.co.uk',
'info@mwilcoxelectrical.co.uk',
'alex@rookelectrical.co.ukbottom',
'alex@redlandelectricalservices.co.uk',
'info@brunelelectricalbristol.co.uk',
'info@cabotelectrical.co.uk',
'website.info@lek-trix.co.uk',
'info@protechelectrical.org.ukCONTACT',
'richard@rjelectricalbristol.co.uk',
'info@jmhazellelectrical.co.uk',
'dan@tippett-electrical.co.uk',
'isaacbroadberry@gmail.com',
'areasinfo@greenwaveselectrical.co.ukFirst',
'info@jfk-electrical.com',
'matthew@mjnelectricalservices.co.uk',
'info@paceelectrical.co.uk',
'enquiries@jeffway.co.uk',
'bz@bzelectrical.co.uk',
'info@elecsolutionsltd.co.uk',
'info@powerxtremeelectricals.com',
'mvsatchwell@hotmail.co.uk',
'info@bes247.co.uk',
'dean@infinityelectrics.co.uk',
'info@mfelectrical.co.uk',
'qfixelectrical@gmail.com',
'info@hemlive.co.ukHoursOpen',
'johnfrenchelectrical@hotmail.co.uk',
'info@suretrustelectrical.co.uk',
'gcostaenquiries@hotmail.comSocialsFacebook',
'882devlinelectrics@gmail.com',
'enquiries@dakselectrical.co.uk',
'dwyersrewires@outlook.com',
'info@srgelectricalservices.co.uk',
'Info@bodelectrical.co.uk',
'info@astute-electrics.co.uk',
'info@eclipse-elec.co.uk',
'enquiries@nelsonsgroup.co.uk',
'info@itc-contractors.co.uk',
'ehms@btinternet.com',
'admin@jbcabling.co.uk',
'usinfo@multiphase.co.uk',
'info@primeelectrical.co.uk',
'OTGElectrical.im@gmail.com',
'info@kenilworth-electrical.com',
'Info@multi-co.co.ukNEED',
'ross@rsselectrical.co.uk',
'07411732479info@hackwoodelectrical.co.uk',
'info@stevesheaelectricalservices.com',
'enquiries@coleelectrical.co.uk',
'info@3coresparkies.com',
'enquiries@positiveconnectionselectrical.co.uk',
'Info@YellowstoneElectrical.co.uk',
'james@derbyshireelectricalservicesltd.co.uk',
'contact@electricaltouch.co.uk',
'kces@btinternet.com',
'info@copperelectrical.co.ukWorking',
'info@electricalservicesderby.uk',
'info@synewaves.netContact',
'info@blhelectrical.com',
'info@sandaelectricalderby.co.uk',
'Emailian@ijselectrical.com',
'860EMAILinfo@dkc-electrical.co.ukADDRESS',
'vokeselectrical@gmail.com',
'nathan@harriselectricalltd.com',
'sales@bulldogelectrical.co.uk',
'enquiry@jihelectrical.co.uk',
'info@mrhelectrical.com',
'enquiries@vbelectrical.co.uk',
'info@morecrofts.net',
'info@jtlelectricsltd.co.uk',
'info@smartelectricalgb.co.uk',
'info@barratt-electrical.co.uk',
'info@fastrackelectrical.com',
'info@mpcelectrical.services',
'adamhemsley@outlook.com',
'info@synewaves.netContact',
'info@centralelectricsandsecurity.co.uk',
'info@arcmande.co.uk',
'Info@macselectrical.co.ukRegistered',
'admin@oconnor.ltd',
'admin@midallstones.com',
'enquiries@ntelectrical.co.uk',
'info@hedgehogelectrical.co.uk',
'07508706527jack@jackjoneselectrical.co.uk',
'detailssupport@smarthomeselectrical.com',
'info@amberelectricalderbyshire.co.uk',
'hello@gettesting.co.uk',
'nimanelectrical@gmail.com',
'info@c-delectrical.co.uk',
'office@voltaireelectrical.co.uk',
'Contactadmin@hullpower.co.uk',
'phil@willisandward.co.uk',
'info@cannon-electrical.com',
'liam@l-nelectrical.co.uk',
'Contacthello@candjelectricalservices.co.ukOffice',
'957930info@dbbelectrical.co.ukHomeElectrical',
'info@ingliselectrical.co.uk',
'info@armstrongelectrical.uk.com',
'starkelectrical@outlook.com',
'1JTinfo@noselectrical.co.uk',
'140515info@mooreyelectricalltd.co.uk',
'siminski67@gmail.com',
'info@cdserviceshull.co.uk',
'info@rmpelectrical.co.uk',
'pageinfo@gloelectricalsolutions.co.ukMob',
'967info@abelectricalhull.comSitemapHomeOur',
'talkenquiries@res.group',
'info@campbellelectrichull.co.uk',
'info@beechelectrical.co.uk',
'info@upgradeelectricalhull.co.uk',
'office@newton-contracting.co.uk',
'info@cnmelectrical.co.uk',
'info@twelectrical.uk',
'info@nandp.uk.net',
'info@chesterselectrical.co.uk',
'info@ockeltonelectrical.co.uk',
'208contact@kirkelectrical.co.ukKirk',
'hello@prolechull.co.uk',
'info@wmelectricalltd.co.uk',
'865222info@hirstelectricaluk.co.ukbottom',
'info@prowireltd.com',
'info@ingliselectrical.co.uk',
'yo42spark@outlook.comFind',
'James@jbelectrical.biz',
'info@teampjd.co.ukHilltop',
'Contactjack@smartlec-hull.co.uk',
'934616info@ms-electrical.netMS',
'info@mbielectricalservices.co.uk',
'info@eastridingelectrical.co.uk',
'adr@adreffold.co.uk',
'info@connectcontractors.co.uk',
'aecservices0@gmail.com',
'info@asmithelectrical.com',
'info@rjcoleman.co.uk',
'info@eco-genelectrical.co.uk',
'pip.warner@wecl.email',
'info@calelectrical.co.uk',
'info@astute-electrics.co.uk',
'Maxelectrical123@gmail.com',
'Emailinfo@je-electrical.co.uk',
'info@glenfieldelectrical.com',
'info@bdelectricalltd.co.uk',
'info@le-electrical-ltd.co.uk',
'EMAILENQUIRIES@GLHELECTRICAL.CO.UK',
'info@egelectrical.ltd',
'ben@electricianleicestershire.co.uk',
'info@lowe-electrical.com',
'Contactinfo@4coreelectrical.co.uk',
'info@leicesterelectrics.com',
'info@dcelectrical.com',
'info@jcsmithelectrical.co.uk',
'info@egelimited.co.uk',
'info@webaheadinternetltd.co.uk',
'info@me-electrical.co.uk',
'enquiries@electract.co.uk',
'0833info@ahullelectrical.co.uk',
'kyle@klb-electrical.co.uk',
'mitch@mpbelectricalservices.co.uk',
'info@hinckleyelectrical.co.uk',
'info@sbelec.uk',
'info@kgl-electrical.co.uk',
'info@mrelectrician.org.uk',
'chris@rcdelec.co.uk',
'info@dpelectrical.co.uk',
'249752sales@fusionelectrics.co.ukFusion',
'DirectorElectriciantsh89@msn.com',
'office@giftelectrical.co.ukGoogle',
'contact@brightelectricals.co.ukINQUIRIESLooking',
'alectrical.leicester@hotmail.co.uk',
'out-of-hours.admin@gap-propertyservices.co.ukTerms',
'admin@dbelectrical.co',
'info@smartlec.co.uk',
'info@ahelectrical.co.uk',
'info@lt-electrical.co.uk',
'ServicesCONTACTJonhardy143@outlook.com',
'info@mrelectrician.org.uk',
'info@spinneyelectrical.co.uk',
'pageadmin@kaselectrical.co.uk',
'office@electricalcontractingsolutions.co.uk',
'nimanelectrical@gmail.com',
'fmelectricalgb@gmail.com',
'michaelcutler22@icloud.comOur',
'liverpoolservice@gmail.com',
'Info@limewireelectrical.co.uk',
'ben@bchelectrical.com',
'info@rapelectrical.co.uk',
'info@agelectricalservicesltd.co.uk',
'james@jamesfoyelectrics.co.uk',
'js-electrical@hotmail.co.uk',
'info@vaderelectrical.co.uk',
'pageadmin@mazgroup.org.uk',
'joanne@advancedelectricaltesting.co.ukmichael',
'info@localelectricalgroup.co.uk',
'info@connex-electrical.co.uk',
'Headlinerinfo@cnuttallelectrical.co.ukLiverpool',
'office@wtjenkins.co.uk',
'twinearthelectrical@gmail.com',
'info@lbaelectricalservices.com',
'info@liverpool-electricians.co.ukTELL',
'liverpool.wirral@electriko.co.uk',
'info@liverpoolelectrics.co.uk',
'info@conatyandcoelectrical.co.uk',
'john_devine_10@hotmail.co.uk',
'info@danielpaulelectrical.com',
'hello@stfelectrical.co.uk',
'admin@gatlec.com',
'info@alsg.ltd',
'chris@parryselectrical.co.uk',
'USmerseylec@outlook.com',
'info@liverpool-electricians.co.ukTELL',
'enquiries@maximec.co.uk',
'info@glynnuttall.co.uk',
'info@mtecelectrical.co.uk',
'maguire.elec@btinternet.com',
'electrics@ejtuck.co.uk',
'info@houserewire.ukPhone',
'info@khlelectricalcontractors.co.ukArea',
'Bilal@bilwireelectrical.com',
'ask@manchesterelectric.co.uk',
'admin@sdes.uk',
'bec.manchester23@gmail.com',
'mapelecuk@gmail.com',
'admin@ygelectricals.co.uk',
'Servicesinfo@mysite.com',
'info@iconnectelectrical.co.ukCall',
'russellselectrical@gmail.com',
'ask@manchesterelectric.co.uk',
'us4belectricltd@gmail.comFollow',
'electricianmili.electrician@gmail.com',
'info@celectrical.com',
'admin@fwelec.co.uk',
'ahelectricians@gmail.com',
'Manchester.ContactSupportinfo@emergencyelectriannearmemanchester.co.ukPrecision',
'info@tranter-electrical.com',
'Payne_electrical@hotmail.co.uk',
'alan@alan-rolfe.co.uk',
'sales@jrbelectric.co.uk',
'info@northtech-electrical-manchester.co.uk',
'info@manchestereicr.com',
'info@amaraelectrical.co.uk',
'fgmillerandson@yahoo.co.uk',
'info@northtech-electrical.co.uk',
'enquiries@dcelectricalservices.co.uk',
'hello@electric-call.co.uk',
'info@gpaelectrical.co.uk',
'UsEmailsam@tosons.comPhone',
'info@nhelectricals.co.uk',
'5AJinfo@akelectricalsolutions.co.uk',
'fast247response@gmail.com',
'EMAILcontact@plumbingmanchester.co.uk',
'info@manchester-domestic-electricians.co.uk',
'jdelectric.info@gmail.com',
'info@voltech-services.uk',
'info@gianettoelectrical.co.uk',
'636384info@mayburyandsonselec.co.uk',
'enquiries@responsiveelectrical.com',
'info@expertspark.co.uk',
'info@electric8.co.ukHoursMonday',
'service@hf-group.co.uk',
'info@emeelectrical.co.uk',
'7320info@cannonec.comCannon',
'info@misterelectrics.co.ukHave',
'haleelectricalcontractors@gmail.com',
'Info@noorelectricalservicesltd.co.uk',
'customercare@sncelectrical.co.uk',
'info@wjelec.co.ukWeb',
'contact@tynesideelectrical.co.uk',
'9DBandy@aielectrical.co.uk',
'darren@langdaleprojects.co.uk',
'info@jhelectricalservice.co.uk',
'8293ajpower.jm@gmail.com',
'intently.cogreatparkelectrical@gmail.com',
'paul@whitfield-electrical-services.co.uk',
'info@electricianoncall.uk',
'info@pandlelectricalltd.co.uk',
'info@candbelectrical.co.uk',
'strelectrics@googlemail.com',
'info@ianwilkeselectrical.co.uk',
'Enquiries@livewire-electrics.comlivewireonline',
'info@setelectrical.co.uk',
'johncsnowdon@gmail.com',
'tony@ams-electrical.co.uk',
'Servicescircuit7surgeon@gmail.com',
'info@tyneandwearelectrical.co.uk',
'admin@dmgelectrical.co.uk',
'electrical@acrolmodular.co.uk',
'enquiries@woodyelectrical.co.uk',
'info@pburke.org',
'5RTdavid@adamsonelectricalservices.co.uk',
'info@mgisd.co.uk',
'admin@dmgelectrical.co.uk',
'office@caretechsystems.co.uk',
'info@malonesgroup.co.uk',
'info@electriciannortheast.comGet',
'dmoelectricalltd@outlook.com',
'info@mccarthybros.co.uk',
'Supportinfo@BeEmElectrical.co.uk',
'nimanelectrical@gmail.com',
'info@urgentelectrical.services',
'info@vilaelectrical.co.uk',
'info@lewiselectricalservices.co.uk',
'electrical@xelex.co.uk',
'info@cspelectrical.co.ukT',
'info@messelectrical.com',
'contact@homeelectrical.com',
'info@breedonelectricalservices.co.uk',
'tobyelectrical@outlook.com',
'solutionsMattWaltersElectrical@gmail.com',
'info@davemadden.co.uk',
's.h.electrical@hotmail.co.uk',
'm.ashworth@mashworthservices.co.ukMonday',
'Officederby@stator-electrical.co.uk',
'2JRContactinfo@knowleselectrical.com',
'info@hedgehogelectrical.co.uk',
'5726admin@alect.co.ukEAST',
'enquiries@tkelectrics.co.uk',
'142mike@revelectrics.co.ukTrusted',
'mat@wwesc.co.uk',
'contactus@necltd.co.uk',
'ace.installations.rm@gmail.com',
'items.info@hicklingelectricalservices.co.uk',
'info@gobselectrics.co.uk',
'ashley@akincadeelectrical.co.uk',
'sales@bulldogelectrical.co.uk',
'info@amper-uk.co.ukAREAS',
'info@lightyearelectrical.co.uk',
'adamhemsley@outlook.com',
'enquiries@effico.ltdHomeDomestic',
'info@fusionelectricals.co.ukEmpower',
'liam@nottsgasandelectrical.com',
'john@aeselectricalservices.co.ukCopyright',
'info@gedlingelectrical.co.uk',
'rowieselectrical@gmail.comStay',
'info@secontracts.co.uk',
'2JRContactinfo@knowleselectrical.com',
'4FWInfo@hartleyelectrical.co.uk',
'info@jotauraselectricianplymouth.co.uk',
'info@epecelectrical.co.uk',
'info@shaveandson.com',
'respondContactelectrician@pbwelectrics.co.uk',
'elevate@electricalsw.com',
'contact@dmdelectrical.co.uk',
'contact@rpficeelectricals.co.uk',
'info@rc-electrical.net',
'info@plymouthelectrician.co.uk',
'steve@sjpower.co.uk',
'office@rtjmartin.co.uk',
'enquiries@milestonegroup.ltd',
'info@totallywireddevon.co.uk',
'enquiries@cdelectricalplus.com',
'admin@acdelectrical.com',
'info@oceancityelectrical.co.uk',
'contact@des-sw.co.uk',
'hello@rowe-net.net',
'info@lc-ec.co.uk',
'ServicesCONTACTsparkelectrical.sw@gmail.comSubmitThanks',
'info@chubbelectrics.co.uk',
'info@apeclimited.com',
'07966251777dave@summitelectrical.co.uk',
'contact@dmdelectrical.co.uk',
'paul@adtecsystems.co.uk',
'efficiency.info@swayeelectrical.com',
'wrightelectricalsolutions@outlook.com',
'info@bonnetelectrical.co.uk',
'info@bradjones-electrician.co.ukGet',
'info@olympia-electrical.com',
'info@waveservices.co.uk',
'info@roweelectrical.co.uk',
'danielmeadows36@gmail.com',
'info@careprojects.co.uk',
'info@uni-lec.com',
'info@eljay.energy',
'info@dbelectrical-sw.uk',
'info@lornestewart.co.uk',
'geoff@plymouthelectrical.co.uk',
'843707enquiries@hodgeelectrical.co.uk',
'enquiries@blecgroup.co.uk',
'info@mepsystems.co.uk',
'info@cavillaelectrical.co.uk',
'info@shaveandson.com',
  ]
  
  const newEmailArr = []
  
  // /*
  
  for (let i = 0; i < emailArr.length; i++) {
    console.log(emailArr[i])
    if (!newEmailArr.includes(emailArr[i])) {
      console.log(emailArr[i])
      newEmailArr.push(emailArr[i])
    }
  }
  
  for (let i = 0; i < newEmailArr.length; i++) {
    send(newEmailArr[i])
  }