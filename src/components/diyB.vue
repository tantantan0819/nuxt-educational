<template>
  <el-dialog title :visible.sync="signed" width="1400" :close-on-click-modal="isClose" :close-on-press-escape="isClose" class="cv">
    <div class="page">
      <input  type="hidden" value="diyB" id="test">
      <div class="top"><img src="/images/contract1.png" alt=""></div>
      <div class="con">
        <div class="mate">
          <span>协议类别【 {{contractInfo.协议类型}} 】</span>
          <span>入学年月【 {{contractInfo.入学年月}} 】</span>
          <span>协议编号【 {{contractInfo.协议编号}} 】</span>
        </div>
        <div class="title mt20">英国留学委托代理协议</div>
        <p>甲方：</p>
        <div class="arw">
          <p>学生：</p>
          <el-input v-model="customerInfo.学生" readonly></el-input>
          <p>身份证号码：</p>
          <el-input v-model="customerInfo.身份证号码" readonly></el-input>
        </div>
        <div class="arw">
          <p>身份证地址：</p>
          <el-input v-model="customerInfo.身份证地址" readonly></el-input>
        </div>
        <div class="arw">
          <p>现住地址：</p>
          <el-input v-model="customerInfo.现住地址" readonly></el-input>
        </div>
        <div class="arw">
          <p>监护人：</p>
          <el-input v-model="mandatory.guardian" :readonly="status == 1"></el-input>
          <p>系学生的</p>
          <el-input v-model="mandatory.guardianship" :readonly="status == 1"></el-input>
          <p>身份证号码：</p>
          <el-input class="w180 middle" v-model="mandatory.guardian_idcard" :readonly="status == 1"></el-input>
        </div>
        <div class="arw">
          <p>身份证地址：</p>
          <el-input v-model="mandatory.guardian_idcard_addr" :readonly="status == 1"></el-input>
        </div>
        <div class="arw">
          <p>现住地址：</p>
          <el-input v-model="mandatory.guardian_live_addr" :readonly="status == 1"></el-input>
        </div>
        <div class="arw">
          <p>手机号：</p>
          <el-input v-model="mandatory.guardian_phone" :readonly="status == 1"></el-input>
          <p>家庭电话：</p>
          <el-input v-model="mandatory.guardian_tel" :readonly="status == 1"></el-input>
          <p>邮箱：</p>
          <el-input class="w180 middle"  v-model="mandatory.guardian_email" :readonly="status == 1"></el-input>
        </div>
        <p class="mt50">乙 方：四川英华联教育咨询有限公司</p>
        <p class="mt20">法定代表人：梁军</p>
        <p class="mt50">经营地址：四川省成都市高新区天府大道中段 530 号东方希望天祥广场 A 座 30 楼</p>
        <p class="mt20">联系电话：028-6133 3945/6/7</p>
        <p class="mt50 lin30 text2">鉴于甲方有英国留学服务需求，乙方为英国教育中心（UKEC LIMITED, 公司注册号 06685056，经营地址 St. James Building, 79 Oxford Street, Manchester, M1 6FQ）的长期战略合作伙伴，甲乙双方本着自愿、平等、诚信的原则，根据《中华人民共和国合同法》及相关法律法规规定，就乙方接受甲方的委托提供自费出国留学中介服务事宜，达成如下协议:</p>
        <p class="title1">一、乙方服务范围</p>
        <p class="mt10 lin24">甲方根据其自身的学术背景及兴趣爱好，自愿委托乙方提供如下自费留学中介服务：</p>
        <p class="mt10 lin24">1. 向甲方提供中国国家留学政策咨询、留学前往国家的教育概况、留学政策、院校、院系、专业及收费等信息，并为甲方的留学方案提供相应的咨询及建议；</p>
        <p class="mt10 lin24">2. 向甲方介绍申请留学院校的入学要求及入学申请程序；对甲方进行评估，根据评估结论向甲方推荐其 合适的英国院校及专业；</p>
        <p class="mt10 lin24">3. 向甲方免费提供院校申请表格，并代为填写；</p>
        <p class="mt10 lin24">4. 指导甲方准备【附件一：选校及专业确认单】中确认的院校及专业的原始申请材料；</p>
        <p class="mt10 lin24">5. 全权负责【附件一：选校及专业确认单】项下的学校及专业的申请事宜；</p>
        <p class="mt10 lin24">6. 指导或代理甲方向确定的留学院校提出留学申请并提交相关资料；</p>
        <p class="mt10 lin24">7. 根据甲方的委托，代为与申请留学院校联系、协调，代为办理入学等手续，根据甲方获得的录取通知书， 代甲方换取其确认入学的唯一院校的签证函；</p>
        <p class="mt10 lin24">8. 协助甲方安排抵达英国后的住宿及接机事宜。相应接机费用、住宿费用由甲方自行承担。</p>
        <p class="mt10 lin24">9. 若甲方成功入学乙方所申请的院校及专业（非 G5），乙方为甲方返还本合同费用。</p>
        <p class="title1">二、服务期限</p>
        <p class="mt10 lin24">服务期限自本协议签订之日起至甲方获得  <el-input v-model="mandatory.encrol_date" :readonly="status == 1"></el-input> 入学首次留学签证结果为止，本协议另有约定的 除外。另有约定如下</p>
        <el-input v-model="mandatory.service_promise" autosize type="textarea" :readonly="status == 1"></el-input>
        <p class="title1">三、甲方的权利与义务</p>
        <p class="mt10 lin24">1. 参考乙方提供的信息和咨询、建议，决定申请留学的国家、院校中英文名称、留学层次、就读专业或专 业方向，确定留学方案并签署本协议【附件一：选校及专业确认单】；</p>
        <p class="mt10 lin24">2. 有权选择自行缴纳院校申请注册费、材料寄送费、签证等第三方收取的费用；甲方承诺在本协议签订后， 不会以任何直接或间接的方式与英国院校方、英国大使馆等单位自行联系，乙方已告知甲方此举将可能导 致学校、专业申请或签证申请的失败，因此产生的后果以及给乙方造成的损失将由甲方自行承担；</p>
        <p class="mt10 lin24">3. 配合乙方及时完成申请准备及向申请留学院校提交申请、寄送资料等工作，如遇前往国家留学政策、签 证政策、入学标准发生变化，应根据新的要求及时提供补充材料；</p>
        <p class="mt10 lin24">4. 按照留学院校要求，如期缴纳学费等有关费用；</p>
        <p class="mt10 lin24">5. 按照本协议约定向乙方支付中介服务费；</p>
        <p class="mt10 lin24">6. 保持与乙方的及时联系，并保证所提供的甲方个人情况、地址和通讯方式等信息真实、有效。甲方如变 更通讯地址，应在通讯地址变更后三日内书面通知乙方（甲方通讯地址变更后，变更通知送达前，以原通讯地址为准）。如未履行通知义务，由此而造成的不利后果由甲方自行承担。</p>
        <p class="mt10 lin24">7. 双方约定的其他权利和义务：</p>
        <el-input v-model="mandatory.customer_right" autosize type="textarea" :readonly="status == 1"></el-input>
        <p class="title1">四、乙方的权利与义务</p>
        <p class="mt10 lin24">1. 要求甲方及时提供办理委托服务所需信息、文件、资料及履行本协议约定的其他义务；</p>
        <p class="mt10 lin24">2. 按本协议约定收取中介服务费；</p>
        <p class="mt10 lin24">3. 按照法律法规规定及留学服务行业规范要求提供本协议约定的中介服务；</p>
        <p class="mt10 lin24">4. 向甲方提供的留学信息，应真实、准确，如遇前往国家留学政策、签证政策、入学标准发生变化，应及 时通知甲方补充相应材料；如乙方向甲方提供虚假个人、签证信息导致甲方申请失败，甲方有权解除本协 议并要求乙方退还全部中介服务费用及赔偿因此给甲方造成的损失；</p>
        <p class="mt10 lin24">5. 及时完成本协议约定的留学服务事项并向甲方通报工作进展情况；乙方在工作日工作时间内应接受甲方 与本协议选定服务内容相应的咨询；咨询费用包括在服务费中，乙方不得另行收取；除院校和签证基本申 请流程外其余事宜采取被动答疑的方式，乙方如有任何疑问可随时向甲方提出；</p>
        <p class="mt10 lin24">6. 接受甲方委托的留学申请，并协助甲方申请留学院校的录取通知书；</p>
        <p class="mt10 lin24">7. 对甲方提供的个人信息及资料，负有妥善保管及保密义务；</p>
        <p class="mt10 lin24">8. 双方约定的其他权利和义务：</p>
        <el-input v-model="mandatory.compay_right" autosize type="textarea" :readonly="status == 1"></el-input>
        <p class="title1">五、中介服务费用</p>
        <p class="mt10 lin24">1. 甲方委托乙方申请的留学院校在本协议【附件一：选校及专业确认单】范围以内的，本协议第一条所涉 的服务内容收费总额为￥
          <el-input class="w80 middle" value="2000" readonly></el-input>
          （大写：人民币
          <el-input class="w80 middle" value="贰仟" readonly></el-input>元）
          。甲方实向乙方交纳服务费￥
          <el-input class="w200 middle" v-model="mandatory.charge_last_number" :readonly="status == 1"></el-input>
          （大写：人民币
          <el-input class="w200 middle" v-model="mandatory.charge_last_capital" :readonly="status == 1"></el-input>
          元）。
        </p>
        <p class="mt10 lin24">甲方委托乙方申请的留学院校超出本协议【附件一：选校及专业确认单】范围的，每增加一所学校，甲方 须另行向乙方缴纳中介服务费用：
          <el-input class="w180 middle" value="非 G5 类院校：￥500；（不含 PS）；" readonly></el-input>
        </p>
        <p class="mt10 lin24">备注：</p>
        <el-input v-model="mandatory.charge_remark" autosize type="textarea" :readonly="status == 1"></el-input>
        <p class="mt10 lin24">2. 中介服务费支付期限</p>
        <p class="mt10 lin24">甲方在签署本协议
          <el-input class="w60 middle" v-model="mandatory.charge_endtime" :readonly="status == 1"></el-input>
          小时内，一次性向乙方缴纳上述中介服务费，乙方在收到此款项后开始为甲方提供 服务。
        </p>
        <p class="mt10 lin24">3. 中介服务费支付方式：</p>
        <el-radio-group v-model="mandatory.charge_payway">
          <el-radio :label="1" :disabled="status == 1 && mandatory.charge_payway!==1">现金</el-radio>
          <el-radio :label="2" :disabled="status == 1 && mandatory.charge_payway!==2">信用卡/借记卡</el-radio>
          <el-radio :label="3" :disabled="status == 1 && mandatory.charge_payway!==3">汇款</el-radio>
          <el-radio :label="4" :disabled="status == 1 && mandatory.charge_payway!==4">其他</el-radio>
        </el-radio-group>
        <p class="mt10 lin24">采用现金和信用卡/借记卡付费的形式，在乙方公司缴纳；采用汇款方式缴纳的，将服务费汇至乙方指定 的以下账户：</p>
        <div class="arw">
          <p>银行账号：</p>
          <el-input v-model="mandatory.charge_bank_account" :readonly="status == 1"></el-input>
        </div>
        <div class="arw">
          <p>账户名称：</p>
          <el-input v-model="mandatory.charge_compay_name" :readonly="status == 1"></el-input>
        </div>
        <div class="arw">
          <p>开户银行：</p>
          <el-input v-model="mandatory.charge_bank_name" :readonly="status == 1"></el-input>
        </div>
        <p class="mt10 lin24">4. 如甲方欠付乙方服务费或其他应付费用，乙方有权暂停并顺延服务，因此所造成的后果甲方自行承担， 如给乙方造成了损失则甲方有义务进行赔偿；如甲方欠付乙方服务费或其他应付费用超过 7 天的，则视 为甲方放弃本协议项下所有权利及院校申请，乙方有权以甲方名义取消甲方所获取的录取资格，有权解除 本协议并要求甲方赔偿乙方因此遭受的损失</p>
        <p class="mt10 lin24">5. 本条所述的服务费仅为提供一次本协议第一条服务内容所涉项目。</p>
        <p class="title1">六、特别提醒</p>
        <p class="mt10 lin24">1. 本协议第一条所述的服务项目为连续性的整体服务，甲方如自愿放弃其中任何项目或另委托第三方代为 提供其中服务的，可能导致相关申请失败，由此导致的后果将由甲方自行承担且不影响乙方根据本协议收 取全额服务费用；</p>
        <p class="mt10 lin24">2. 在获得英国学生签证后，甲方应在英国院校规定的时间内抵达英国并及时办理报到注册手续。如非因甲 方本人原因（如航班延误、未及时获得签证结果等）将造成抵达延误的须最迟在英国院校规定的时间前 3 个工作日告知乙方，乙方将协助甲方与英国院校沟通短期延时入学的相关手续（具体以与英国院校协商结 果为准）；</p>
        <p class="mt10 lin24">3. 甲方收到录取通知后如无法在录取通知书指定的入学年度入学，甲方应在第一时间（最迟不晚于录取通 知书指定入学年度入学时间前
          <el-input class="w60 middle" value="30" readonly></el-input>
          日）向乙方发出书面通知，乙方在收到书面通知后将免费代为向该英国 院校申请延期入学至录取通知书指定入学年度的下一年度。乙方将尽力协调及争取，但如因甲方未及时通 知乙方错过申请期限或院方拒绝延期入学申请而最终导致甲方入学资格因此丧失的后果由甲方自行承担。</p>
        <p class="mt10 lin24">4. 甲方自理的第三方收费</p>
        <p class="mt10 lin24">乙方为甲方提供本协议所述之任何服务所产生的第三方收取费用由甲方另行支付，乙方所收取的服务费不 包括任何第三方费用，第三方费用主要包括：</p>
        <div class="width_half mt10">
          <p>A．院校申请费/入学考试费</p>
          <p>B．护照办理费</p>
          <p>C．使馆收取的签证费</p>
          <p>D．体检费</p>
          <p>E．机票费（含相关税费）</p>
          <p>F．学费/住宿费、杂费及押金</p>
          <p>G．雅思/托福等考试费</p>
          <p>H．接机服务费</p>
          <p>I． 公证费</p>
          <p>J. 保险费（含 NHS 保险费）</p>
          <p>K. 其他费用（如有）</p>
        </div>
        <p class="mt10 lin24">注：上述收费以第三方最新执行标准为准，乙方对以上费用的折扣、补贴、退费等不做任何承诺。以上费 用须由甲方根据乙方的通知自行向第三方支付。</p>
        <p class="title1">七、退费条款</p>
        <p class="mt10 lin24">1. 甲方收到符合约定的任何一所院校的录取通知书（包括有条件录取通知书及无条件录取通知书），即视 为留学申请成功。若申请全部失败，甲方有权解除本协议并要求乙方退还已收的全部款项。</p>
        <p class="mt10 lin24">2. 如乙方通知甲方【附件一：选校及专业确认单】中院校建议甲方调剂到【附件一：选校及专业确认单】 所列该院校对应专业以外的其他专业，甲方接受并认可的，则不影响乙方完整收取本协议约定的全额服务 费。</p>
        <p class="mt10 lin24">3. 除本协议另有约定外，若甲方未满足换发英国院校签证函要求或未取得签证而无法就读的，乙方虽无须 退还已收的服务费但仍应协助甲方向院校申请退还学费，其间产生的银行手续费及相关费用由甲方自行承 担，甲方认可乙方将尽可能协助申请退费但并未承诺甲方必然会毫无风险地收回学费；</p>
        <p class="mt10 lin24">4. 遇不可抗力</p>
        <p class="mt10 lin24">如英国院校所在地发生不可抗力事件导致甲方院校申请或签证申请失败，或虽录取但无法办理签证，或虽 录取但经中国出入境管理部门或教育部门警告当地已不适宜生活、就读的，双方均有权要求解除本协议。 如解除本协议的，乙方退还甲方如期向其已付的服务费用的 40%；除学费外的第三方已收费，乙方无责任 进行退还或补贴，但并不影响甲方自行与第三方协调退费相关事宜，乙方应代为转达甲方的退费意愿；乙 方同意协助甲方向院校申请退还学费，其间产生的银行手续费及相关费用由甲方自行承担，乙方提供申请 退费的协助和配合但并未承诺甲方必然会毫无风险地收回学费。</p>
        <p class="mt10 lin24">5. 疾病</p>
        <p class="mt10 lin24">因甲方罹患重大疾病或传染性疾病未能治愈而不宜或不被批准在原定报到日前出行的，乙方收到经双方共 同指定的二级甲等或以上等级医院出具的确诊证明后，双方均有权选择顺延或解除本协议：</p>
        <p class="mt10 lin24">（1）如一方选择解除本协议的，乙方根据代为办理留学事务的进程具体协商退费事宜；第三方已收费乙 方无责任退还或补贴，甲方应自行与第三方协调退费事宜；</p>
        <p class="mt10 lin24">（2）如双方均同意顺延协议期限，则乙方同意就重新申请的费用给予适当优惠，届时双方友好协商。</p>
        <p class="title1">八、争议及解决</p>
        <p class="mt10 lin24">1. 本协议的履行、解释及争议解决均适用中华人民共和国法律；</p>
        <p class="mt10 lin24">2. 因本协议履行发生任何争议，双方应尽可能友好协商，如协商不成的任何一方可选择向当地仲裁委员会 申请仲裁，仲裁依据中华人民共和国法律进行；</p>
        <p class="mt10 lin24">3. 因一方违约导致守约方提起仲裁的，由此产生的仲裁费用和合法律师费由该违约方承担。</p>
        <p class="title1">九、其他</p>
        <p class="mt10 lin24">1. 各方在签订本协议时进行了充分自愿的磋商，乙方亦已向甲方进行了详细的解释和说明，各方在此基础 上共同友好达成如上约定，并已仔细阅读并完全理解其内容，承诺自愿遵守、自愿承担因此导致的法律后 果。</p>
        <p class="mt10 lin24">2. 中文是本协议唯一的合法文字；本协议壹式贰份，甲乙双方各执壹份，具有同等法律效力。</p>
        <p class="mt10 lin24">3. 本协议自甲方签字、乙方盖章之日起生效。</p>
        <p class="mt10 lin24">4. 本协议一经签订则完全替代双方在此前达成的任何口头约定、承诺或签署的意向性文件以及广告、宣传 等要约邀请内容，仅以本协议载明内容为双方履行依据；如有补充或变更，需以书面形式另行签订补充协 议，补充协议具有优先法律效力。</p>
        <p class="mt10 lin24">5. 本协议附件系本协议的组成部分，与本协议具有同等法律效力。</p>
        <p class="mt10 lin24">本协议附件清单：</p>
        <p class="mt10 lin24">附件一：选校及专业确认单</p>
        <p class="mt10 lin24">附件二：甲方身份证复印件</p>
        <p class="mt10 lin24">附件三：英国留学委托代理协议--补充协议（如有）</p>
        <p class="mt10 lin24 bold">6. 甲方确认</p>
        <p class="mt10 lin24 bold">（1）除特别书面声明外，甲方所提供的现住地址为乙方寄送书面文书的通讯地址。乙方在提供中介服务 过程中，如按照甲方提供的其他联络方式无法取得联系时，乙方向该通讯地址发送的书面文书，即视为乙 方履行了通知义务。甲方在本协议中所提供的邮箱即为乙方发送相关邮件的指定对接邮箱。甲方应经常查 收乙方指定对接邮箱发出的邮件，及时予以回复。甲方如更改通讯地址或邮箱，应在通讯地址或邮箱变更后三日内及时以书面形式通知乙方，如甲方未通知则将承担因此而产生的一切不利后果。（通讯地址或邮 箱变更后，通知送达前，以原通讯地址或邮箱为准）</p>
        <p class="mt10 lin24 bold">（2）甲方监护人就留学相关事项、本协议履行以及履行本协议涉及的一切事宜给予乙方的回复（包括口 头、书面、邮件回复）均为甲方监护人与学生充分沟通商量后做出的决定，是甲方监护人和学生真实意思 的表示，甲方不得以监护人与学生未充分沟通商量为由，对已向乙方作出的回复提出异议。</p>
        <p class="mt10 lin24 bold">（3）甲方学生及监护人签署本协议前已对本协议以上条款详细阅读并得到乙方详尽说明和解释，完全明 白并同意以上各项条款。</p>
        <p class="mt10 lin24">（以下无正文，为签字页）</p>
        <p class="mt50 lin24">甲方： </p>
        <p class="mt10 lin24">学生： <el-input class="w200 middle" v-model="customerInfo.学生" readonly></el-input></p>
        <p class="mt10 lin24">监护人：<el-input class="w200 middle" v-model="mandatory.end_guardian" :readonly="status == 1"></el-input></p>
        <p class="mt50 lin24">乙方：四川英华联教育咨询有限公司 </p>
        <p class="mt10 lin24">乙方经办人：<el-input class="w200 middle" v-model="mandatory.compay_agent" :readonly="status == 1"></el-input></p>
        <p class="mt10 lin24">本协议签订日期：
          <el-date-picker
            v-model="mandatory.signed_time"
            type="date"
            placeholder=""
            :editable="isClear"
            :readonly="status == 1"
            format="yyyy 年 MM 月 dd 日" class="deta_no">
          </el-date-picker>
        </p>
        <p class="mt10 lin24">本协议签订于
          <el-input class="w100 middle" v-model="mandatory.signed_province" :readonly="status == 1"></el-input>
          省
          <el-input class="w100 middle" v-model="mandatory.signed_city" :readonly="status == 1"></el-input>
          市
          <el-input class="w100 middle" v-model="mandatory.signed_region" :readonly="status == 1"></el-input>
          区
        </p>
      </div>
      <div class="footer mt50"><img src="/images/contract2.png" alt=""></div>
    </div>
    <div class="page mt50">
      <div class="top"><img src="/images/contract1.png" alt=""></div>
      <div class="con attachment">
        <p class="title1 mt20">【附件二：英国留学委托代理协议--补充协议】</p>
        <p class="title1 mt50 cc">声明</p>
        <p class="mt10 lin24">本人
          <el-input class="w100 middle" v-model="mandatory.statement_name" :readonly="status == 1"></el-input>
          自愿放弃协议中第一条第九款中所述的返还本合同费用，兑换为由乙方提供的
          <el-input class="middle w550" v-model="mandatory.statement_txt" :readonly="status == 1"></el-input>
        </p>
        <p class="mt100 lin24">特此声明。</p>
        <p class="mt100 lin24 tr">甲方： <el-input class="w100 middle" v-model="mandatory.customer_name" :readonly="status == 1"></el-input>（签字）</p>
        <p class="tr">
          日期:
          <el-date-picker
            v-model="mandatory.customer_signed_time"
            type="date"
            placeholder=""
            :editable="isClear"
            :readonly="status == 1"
            format="yyyy 年 MM 月 dd 日" class="deta_no w170">
          </el-date-picker>
        </p>
      </div>
      <div class="footer mt50"><img src="/images/contract2.png" alt=""></div>
    </div>
    <div class="cv_footer ps_footer">
      <div class="footer_button">
                    <span @click="close">
                        <i>取消</i>
                    </span>
        <span @click="pay" v-if="state == 1 && type== 596">立即支付</span>
        <span @click="sure" v-if="state != 1 && type== 596">确认签约</span>
      </div>
    </div>
  </el-dialog>
</template>
<style lang="scss">
  @import "~/assets/css/contract.scss";
  @import "~/assets/css/cv.scss";
</style>
<script>
  import http from "~/plugins/http";
  export  default {
      props: ['id','state','type'],
      data(){
          return{
              status: 1,//不可编辑状态
              isClose: false,
              signed: true,
              isClear: false,
              contractInfo: {},
              customerInfo: {},
              mandatory: {
                  agree_protocol: '',
                  guardian: '',
                  guardianship: '',
                  guardian_idcard: '',
                  guardian_idcard_addr: '',
                  guardian_live_addr: '',
                  guardian_phone: '',
                  guardian_tel: '',
                  guardian_email: '',
                  service_promise: '',
                  customer_right: '',
                  compay_right: '',
                  charge_last_number: '',
                  charge_last_capital: '',
                  charge_remark: '',
                  charge_endtime: '',
                  charge_payway: '',
                  charge_bank_account: '',
                  charge_compay_name:'',
                  charge_bank_name:'',
                  end_guardian:'',
                  compay_agent:'',
                  signed_time: '2020-02-09',
                  signed_province: '',
                  signed_city: '',
                  signed_region: '',
                  statement_name: '',
                  customer_name:'',
                  customer_signed_time: '',
                  statement_txt:'',
                  encrol_date:''
              },
              no_fill:{

              },
          }
      },
      mounted(){
          this.mandatory.agree_protocol = (new Date()).getTime();
          http.get('/contract-mail-data/detail',{id: this.id}).then(res=>{
              if(res){
                  this.contractInfo = res.contractInfo;
                  this.customerInfo = res.customerInfo;
                  if(res.data){
                      this.mandatory = res.data;
                      //备注：可能会出现文本域换行，特此处理
                      for(let i in this.mandatory){
                          typeof this.mandatory[i] == 'string' ? this.mandatory[i] = this.mandatory[i].trim() : '';
                      }
                  }

              }
          })
      },
      methods:{
          close(){
              this.signed = false;
              this.$emit("closeContr",'false');
          },
          //确认签约
          sure(){
              let obj = Object.assign(this.mandatory,this.no_fill);
              obj.contract_id = this.id;
              http.post('/contract-mail-data/save',obj).then(res=>{
                  if(res){
                      this.$emit("closeContr");
                  }
              })
          },
          //立即支付
          pay(){
              this.$router.push({ path: "/contract/pay", query: { id: this.id } });
              this.$emit("closeContr",'false');
          }
      },

  }
</script>

