const Helplists=[
    {
        id:1,
        label: '易打软件',
        type:0,
        children: [{
          id:'1-1',
          label: '软件介绍',
          title:'易打软件',
          icon:'icon iconfont full-icon-icon_154',
          type:1,   //type 0表示父级节点   1表示正常点击切换数据   2表示出现右侧浮动面板
          content:`
            <p>探索者易打软件是基于CAD平台的快速拆图、批量打印软件。软件适用于各行各业，凡使用CAD绘图，图框需要拆分、转格式、打印的情况，均可高效率的完成。通过用户完成一次自定义图框设置，可以实现对所有图框的大小、比例、图框内文字的精确识别，完成一键拆图。为满足数字化审图及交付的要求，可以将文件格式自动转成PDF/DWF/PNG等多种交付格式，文件名称自动识别图框内的图名、图号等相关内容，解决企业归档、打印、数字化图纸交付等难题。</p>
            <p>软件中不止打印一种功能，有多款工具提升您的工作效率。</p>
            <ul class="list_ul">
                <li> 
                    <h3>1. 智慧打印：</h3>
                    <div class="sucesser">图纸内不同比例图框可一次打印成PDF/DWG/PLT等格式文件，并根据图签内图名、图号等对文件命名。</div>  
                    <img src="./static/data/helpdata/imgs/help/capter1-1-1.png" class="row_img"/>  
                </li>
                <li> 
                    <h3>2. 批量打印：</h3>
                    <div class="sucesser">指定图层或图块批量打印成PDF/DWF/PLT等格式文件。</div> 
                    <img src="./static/data/helpdata/imgs/help/capter1-1-2.png" class="row_img"/>  
                </li>
                <li> 
                    <h3>3. 连续打印：</h3>
                    <div class="sucesser">让打印像截图一样，快速、连续、方便。</div> 
                    <img src="./static/data/helpdata/imgs/help/capter1-1-3.png" class="row_img"/>  
                </li>
                <li> 
                    <h3>4. 图纸目录：</h3>
                    <div class="sucesser">选择已布置好的智慧打印框，即可一键生成图纸目录。</div> 
                    <img src="./static/data/helpdata/imgs/help/capter1-1-4.png" class="row_img"/>  
                </li>
                <li> 
                    <h3>5. PDF浏览器：</h3>
                    <div class="sucesser"> 打印成PDF文件后，直接用PDF浏览器查看文件，使用左侧文件列表切换文档，浏览器左下角提供图纸尺寸，不再需要换算，让图纸看得更方便。</div>
                    <img src="./static/data/helpdata/imgs/help/capter1-1-5.png" class="row_img"/>  
                </li>
                <li> 
                    <h3>6. 合并PDF：</h3>
                    <div class="sucesser">将多个PDF文件合并成一个PDF文件。</div> 
                    <img src="./static/data/helpdata/imgs/help/capter1-1-6.png" class="row_img"/>  
                </li>
                <li> 
                    <h3>7. 拆分PDF：</h3>
                    <div class="sucesser">将一个多页PDF文件拆分成多个PDF文件。</div>
                    <img src="./static/data/helpdata/imgs/help/capter1-1-7.png" class="row_img"/>  
                </li>
                <li> 
                    <h3>8. 批量重命名标准版：</h3>
                    <div class="sucesser"> 可对文件名进行批量操作，如批量增加前缀、后缀，查找替换文字，增加序号等。</div>
                    <img src="./static/data/helpdata/imgs/help/capter1-1-8.png" class="row_img"/>  
                </li>
                <li> 
                    <h3>9. 批量重命名专业版：</h3>
                    <div class="sucesser">功能强大，如果你会正则，这款软件绝对会让你惊讶。</div> 
                    <img src="./static/data/helpdata/imgs/help/capter1-1-9.png" class="row_img"/>  
                </li>
                <li> 
                    <h3>10. 批量绑定外部参照：</h3>
                    <div class="sucesser">批量将图纸外部参照绑定，让图纸传输更方便。</div> 
                    <img src="./static/data/helpdata/imgs/help/capter1-1-10.png" class="row_img"/>  
                </li>
            </ul>
          `
        },{
            id:'1-2',
            label: '安装与试用',
            title:'易打软件',
            icon:'icon iconfont full-icon-icon_480',
            type:1,
            content:`
              <h3>软件安装：</h3>
              <ul class="steplist">
                  <li> 操作系统：支持XP、Win7 、Win10、Win11系统。不支持苹果Mac系统，Mac系统可安装双系统或通过虚拟机安装Windows。</li>
                  <li> 软件支持AutoCAD2008-2022版本、中望CAD2020-2022版本、浩辰CAD2020-2022版本。</li>
                  <li> 易打软件已进行了数字证书的签名，在大部分系统环境下均可正常安装。如果安全软件仍误报病毒或安装后出现异常，请在安装前暂时将杀毒软件退出，安装完成后再开启。</li>
                  <li> 如果需要重新安装，直接安装即可，不需要先卸载后安装。</li>
              </ul>
              <h3>软件试用：</h3>
              <ul class="steplist">
                  <li> 安装软件后，首次使用微信扫码登录可试用30天，即绑定微信账号。</li>
                  <li> 软件为付费软件，49元一年，在软件中使用微信扫码付款。</li>
                  <li> 软件为多点登录方式，不限制电脑台数，但禁止单用户多点在线。</li>
              </ul>
            `
        },{
            id:'1-3',
            label: '智慧打印操作视频',
            title:'易打软件',
            icon:'icon iconfont full-icon-icon_450',
            type:1,
            content:`
                <h3>操作视频</h3>
               
              <iframe src="//player.bilibili.com/player.html?aid=638139555&bvid=BV1YY4y1e7YS&cid=574810369&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="videoDiv" id="iframe"> </iframe>
            `
        },{
            id:'1-4',
            label: '批量打印操作视频',
            title:'易打软件',
            icon:'icon iconfont full-icon-icon_450',
            type:1,
            content:`
                <h3>操作视频</h3>
              <iframe src="//player.bilibili.com/player.html?aid=298200781&bvid=BV18F411g7b4&cid=574812739&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="videoDiv"> </iframe>
              
            `
        },{
            id:'1-5',
            label: '一键生成图纸目录视频',
            title:'易打软件',
            icon:'icon iconfont full-icon-icon_450',
            type:1,
            content:`
              <h3>操作视频</h3>
              <iframe src="//player.bilibili.com/player.html?aid=425746528&bvid=BV1L3411T7vi&cid=574819970&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="videoDiv"> </iframe>
              
            `
        },{
            id:'1-6',
            label: '批量重命名操作视频',
            title:'易打软件',
            icon:'icon iconfont full-icon-icon_450',
            type:1,
            content:`
              <h3>批量重命名操作视频</h3>
              <iframe src="//player.bilibili.com/player.html?aid=425670920&bvid=BV143411n7da&cid=574816329&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="videoDiv"> </iframe>
            `
        },{
            id:'1-7',
            label: '常见问题',
            title:'易打软件',
            icon:'icon iconfont full-icon-icon_440',
            type:2,
            content:`
                <div class="questionList" id="Q1">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>1. 安装易打软件后，点击菜单显示未知命令，是什么原因？</h3>
                        <img src="./static/data/helpdata/imgs/help/capter1-7-1.png" class="row_img"/>  
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em>
                            <div> 首次安装易打软件时，请将电脑上所装的杀毒软件、安全卫士、电脑管家等全部退出去再安装，就不会遇到这种情况。当出现未知命令这种情况时，首先是把杀毒软件等退出去，将软件卸载，再重新安装。
                            或是在杀毒软件的恢复区找回被删除的dll文件，同时添加信任。要不然电脑重启后还会被误删。</div>
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q2">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>2. 使用软件时登录二维码弹不出来，是什么原因？</h3>
                        <img src="./static/data/helpdata/imgs/help/capter1-7-2-1.png" class="row_img"/>  
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                                1) 首次使用二维码登陆时，需要时间比较长，请等待一下。<br />
                                2) 请即时更新最新版本软件。<br />
                                3) 可在标题栏右键切换联网方式，切换下接口方式。<br />
                                <img src="./static/data/helpdata/imgs/help/capter1-7-2-2.png" class="row_img"/>  <br />
                                4) 如仍未出现二维码，请将杀毒软件退出并重置防火墙。<br />
                                5) 可在internet选项——高级——重置一下。并用IE浏览器打开此网址 https://bdp.yunzhukeji.cn，显示此内容即成功：Hello, bdp.yunzhukeji.cn! <br />
                                    <img src="./static/data/helpdata/imgs/help/capter1-7-2-3.png" class="row_img"/>   <br />
                                6) 如使用以上方法皆不行，请进QQ群联系我们。
                            </div>
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q3">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>3. 打印时软件发生致命错误，或是卡住不动的情况，怎么处理？</h3>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                                1) 可在易打菜单——软件维护——重新注册PC3组件，也可在进程里结束pc3tool<br />
                                <img src="./static/data/helpdata/imgs/help/capter1-7-3-1.png" class="row_img" /> <br />
                                2) 或是直接输入命令BDPRESET重置一下。<br />
                            </div>
                        </p>
                    </div>
                </div>


                <div class="questionList" id="Q4">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>4. 智慧打印不是可以直接命名么，为什么在打印PDF时还要每一张图都提示保存命名？</h3>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                                这种情况一般是用的AdobePDF的打印机，这是其打印机的原因，推荐使用CAD自带的DWG To PDF打印机，可自动对文件命名。
                            </div>
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q5">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>5. 智慧打印不是可以自动匹配纸张么，为什么我打印出来的尺寸不对？</h3>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                            这种情况一般是用的pdffactory的打印机，我们对其纸张尺寸不能修改，只是选择最适合的纸张，推荐使用CAD自带的DWG To PDF打印机。
                            </div>
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q6">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>6. 为什么用08CAD打印出来的PDF不是居中的，四周的留白各不相等？</h3>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                            这是CAD08版本的BUG，更新CAD提供的补丁可以解决问题。易打菜单——软件维护——应用CAD08打印机驱动补丁
                            <img src="./static/data/helpdata/imgs/help/capter1-7-6.png" class="row_img"/>   <br />
                            </div>
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q7">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>7. 使用易打软件一段时间后提示授权无效，是否现在获取软件授权，是什么情况？</h3>
                        <img src="./static/data/helpdata/imgs/help/capter1-7-7.png" class="row_img"/>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                            此为软件试用到期，选择是，可以购买软件，或是直接输入命令BLIC，重新扫码登录，软件会显示授权时间，如显示已过期，为软件授权到期。也可在探索者商城小程序中——我的软件里查询软件授权时间。
                            </div>
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q8">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>8. 打印为PDF后，图纸文字显示注释，是什么原因？</h3>
                        <img src="./static/data/helpdata/imgs/help/capter1-7-8-1.png" class="row_img"/>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                                1) 在CAD命令行里输入PDFSHX设置下系统变量<br />
                                <img src="./static/data/helpdata/imgs/help/capter1-7-8-2.png" class="row_img"/>
                                <div class="warninger">
                                    <span>注：</span> 
                                    <div>
                                    2016版CAD需要安装下补丁，可在易打QQ服务群中找到 “AutoCAD 2016 Service Pack”，安装此补丁程序即可。
                                    </div>
                                </div>
                                2) 在易打菜单——易打全局设置中勾选“打印时去掉PDF文件里面文字周围的边框”，但2016依然需要安装AutoCAD 2016 Service Pack此补丁包
                                
                                <img src="./static/data/helpdata/imgs/help/capter1-7-8-3.png" class="row_img"/>
                            </div>
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q9">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>9. 转成PDF文件后，图中字体间距会被拉大，是什么原因？</h3>
                        <img src="./static/data/helpdata/imgs/help/capter1-7-9-1.png" class="row_img"/>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                            是因为使用了windows字体，可以将字体换成shx字体，或是使用高版本CAD时，在CAD打印——PDF选项——先取消勾选“捕获图形中使用的字体”——再勾选“将所有文字转换为几何图形”，就可以了。

                                <img src="./static/data/helpdata/imgs/help/capter1-7-9-2.png" class="row_img"/>
                                或是直接在打印机特性——自定义特性——将所有文字转换为几何图形
                                
                                <img src="./static/data/helpdata/imgs/help/capter1-7-9-3.png" class="row_img"/>
                            </div>
                            
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q10">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>10. 为什么用已经定义好的打印框使用匹配图框并布置时，匹配不上？</h3>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                                <b>第一种情况：</b> 先确认图框图层是不是设置了非打印，如果设置了非打印，需要勾选识别非打印图形。
                                <img src="./static/data/helpdata/imgs/help/capter1-7-10-1.png" class="row_img"/>
                                <b>第二种情况：</b> 勾选了[S]，勾选上，即为只使用当前打印框匹配，所以之前定义的会无法匹配。
                                <img src="./static/data/helpdata/imgs/help/capter1-7-10-2.png" class="row_img"/>
                                <b>第三种情况：</b> 这种情况需要仔细量一下图框是不是跟打印框是一样大小的，可能图框尺寸超出一点，或是图框角度有偏差，或是图框内有直线超出了图框，或是将图框和图框外的其他图形做成了一个块，软件就不能自动匹配上，需要手动调整一下图框。
                            </div>
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q11">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>11. 为什么图纸打印出PDF不是黑白的？</h3>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                            如果公司没有自己的打印样式文件的话，请使用monochrome.ctb/monochrome.stb打印样式。
                            </div>
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q12">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>12. 已使用黑白打印样式monochrome.ctb，为什么打出来有些图形还是带有颜色？</h3>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                            请看下图层管理器中，图层颜色是否选用了真彩色，如选用了真彩色，其不受monochrome.ctb这个打印样式表控制，可以自行将真彩色指定成索引颜色。也可用易打软件中提供的【真彩色转索引颜色】功能进行相似颜色转换。
                            <img src="./static/data/helpdata/imgs/help/capter1-7-12-1.png" class="row_img"/>
                            <img src="./static/data/helpdata/imgs/help/capter1-7-12-2.png" class="row_img"/>
                            </div>
                        </p>
                    </div>
                </div>
             
              
            `,
            idlist:[{
                id:"Q1",
                label:"安装易打软件后，点击菜单显示未知命令，是什么原因？"
            },{
                id:"Q2",
                label:"使用软件时登录二维码弹不出来，是什么原因？"
            },{
                id:"Q3",
                label:"打印时软件发生致命错误，或是卡住不动的情况，怎么处理？"
            },{
                id:"Q4",
                label:"智慧打印不是可以直接命名么，为什么在打印PDF时还要每一张图都提示保存命名？"
            },{
                id:"Q5",
                label:"智慧打印不是可以自动匹配纸张么，为什么我打印出来的尺寸不对？"
            },{
                id:"Q6",
                label:"为什么用08CAD打印出来的PDF不是居中的，四周的留白各不相等？"
            },{
                id:"Q7",
                label:"使用易打软件一段时间后提示授权无效，是否现在获取软件授权，是什么情况？"
            },{
                id:"Q8",
                label:"打印为PDF后，图纸文字显示注释，是什么原因？"
            },{
                id:"Q9",
                label:"转成PDF文件后，图中字体间距会被拉大，是什么原因？"
            },{
                id:"Q10",
                label:"为什么用已经定义好的打印框使用匹配图框并布置时，匹配不上？"
            },{
                id:"Q11",
                label:"为什么图纸打印出PDF不是黑白的？"
            },{
                id:"Q12",
                label:"已使用黑白打印样式monochrome.ctb，为什么打出来有些图形还是带有颜色？"
            }]
        },{
            id:'1-8',
            label: '浙江省图纸打印方法',
            title:'易打软件',
            icon:'icon iconfont full-icon-icon_184',
            type:1,
            content:`
              <p>因浙江省电子审图发布了新的图纸文件命名规定，在图幅上采用新的定义方式。如下图要求：</p>
              <p class="guiding">
                使用项目负责人帐号可以上传全专业的图纸，上传图纸分为单张和批量上传， 图纸要求DWF格式， 命名规则为<span style="color:#f00">图号_图名[图幅] 图纸类型.dwf</span>， 其中“_”为英文间隔符，命名不规范的图纸无法上传至系统中，系统会自动记录上传人的身份。
                上传完后，也可以进行批量预览、删除。
              </p>
             
              <img src="./static/data/helpdata/imgs/help/capter1-7-13-2.png" class="row_img"/>  
              <p>在命名规则上和文件格式要求上，易打软件完全可以满足要求，但图幅想一键生成图中的样式，只需在易打全局设置中，勾选【图幅采用浙江省审图系统幅面代号表达】选项即可。</p>
              <img src="./static/data/helpdata/imgs/help/capter1-7-13-3.png" class="row_img"/> 
              <iframe src="//player.bilibili.com/player.html?aid=853216244&bvid=BV13L4y1L7hU&cid=574821647&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="videoDiv"> </iframe>
            `
        }]
      }, {
        id:2,
        label: '易批注',
        type:0,
        children: [{
          id:'2-1',
          label: '软件介绍',
          title:'易批注',
          icon:'icon iconfont full-icon-icon_154',
          type:1,
          content:`
            <p>探索者易批注软件是一款高效型CAD审图批注软件。通过绘制云线及文字说明对DWG图纸进行在位标记。软件以云服务为支撑，可将图纸及批注意见通过云端在线传输，且能一键输出校审记录等功能。软件可定义项非常丰富，极大提高生产效率，同时操作简单、易用易学。</p>
            <img src="./static/data/helpdata/imgs/help/capter2-1-1.png" class="row_img"/>  
          `
        }, {
            id:'2-2',
            label: '操作视频',
            title:'易批注',
            icon:'icon iconfont full-icon-icon_450',
            type:1,
            content:`
            <h3>操作视频</h3>
            <iframe src="//player.bilibili.com/player.html?aid=510662666&bvid=BV1ku411C7PN&cid=574097413&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=true" autoplay=true scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="videoDiv"> </iframe>
            `
          }]
      },{
        id:3,
        label: 'PSEE签章',
        type:0,
        children: [{
          id:'3-1',
          label: '软件介绍',
          title:'PSEE签章',
          icon:'icon iconfont full-icon-icon_154',
          type:1,
          content:`
            <p>探索者PSee签章软件是提供PDF图纸批量签章的一款软件。因数字化审图需求，需要在PDF图纸上进行电子签章。软件可供设计人员、审查人员、审批人员电子签章，注册章、企业章等自动化签章，实现电子文件一键批量签章，签章效率远远超过人工盖章。</p>
            <img src="./static/data/helpdata/imgs/help/capter3-1-1.png" class="row_img"/>  
          `
        }, {
            id:'3-2',
            label: '操作视频',
            title:'PSEE签章',
            icon:'icon iconfont full-icon-icon_450',
            type:1,
            content:`
            <h3>操作视频</h3>
            <iframe src="//player.bilibili.com/player.html?aid=683193172&bvid=BV19S4y1w7C3&cid=576345124&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="videoDiv"> </iframe>
            `
        }, {
            id:'3-3',
            label: '常见问题',
            title:'PSEE签章',
            icon:'icon iconfont full-icon-icon_440',
            type:2,
            content:`
                <p>软件使用过程中弹出对话框如下图所示</p>
                <div  class="questionList" id="Q1">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>1.  SQL logic error 提示框发生异常。</h3>
                        <img src="./static/data/helpdata/imgs/help/capter3-3-1-1.png" class="row_img"/>  
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em>
                            <div> 原因：缓存文件太老，不存在此表<br/>
                            解决方法：清理缓存文件。关闭PSee签章程序，进入<br/>
                            C:\Users\Administrator.USER\AppData\Roaming\TSZ.PSeeSign\INI\DB，删除或重命名文件《AppSetting.db》</div>
                        </p>
                    </div>
                </div>
                <div  class="questionList" id="Q1">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>2. 找不到指定模块。</h3>
                        <img src="./static/data/helpdata/imgs/help/capter3-3-2.png" class="row_img"/>  
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em>
                            <div> 
                            原因：系统中缺少vcredist_x64(vc++2010 MSVCR100)运行时<br/>
                            解决方法：安装vcredist_x64(vc++2010 MSVCR100) ，可进QQ服务群中找到此程序并安装。
                            </div>
                        </p>
                    </div>
                </div>
            `,
            idlist:[{
                id:"Q1",
                label:"SQL logic error 提示框发生异常。"
            },{
                id:"Q2",
                label:"找不到指定模块。"
            }]
        }]
      },{
        id:4,
        label: '探索者DWF签章',
        type:0,
        children: [{
          id:'4-1',
          label: '软件介绍',
          title:'探索者DWF签章',
          icon:'icon iconfont full-icon-icon_154',
          type:1,
          content:`
            <p>探索者DWF签章软件是一款专用于DWF格式图纸文件盖章的工具型软件。目前很多省份数字化审图要求使用DWF格式上传图纸，而设计院便于管理，需要在DWF文件上进行签章。软件可实现对DWF文件的批量签章。</p>
            <img src="./static/data/helpdata/imgs/help/capter4-1-1.png" class="row_img"/> 
          `
        }, {
            id:'4-2',
            label: '操作视频',
            title:'探索者DWF签章',
            icon:'icon iconfont full-icon-icon_450',
            type:1,
            content:`
            <h3>操作视频</h3>
            <iframe src="//player.bilibili.com/player.html?aid=638191541&bvid=BV1DY4y1e7Vj&cid=576526664&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"  class="videoDiv"> </iframe>
            `
        }]
      },{
        id:5,
        label: 'DWG合并助手',
        type:0,
        children: [{
          id:'5-1',
          label: '软件介绍',
          title:'DWG合并助手',
          icon:'icon iconfont full-icon-icon_154',
          type:1,
          content:`
          <p>探索者DWG合并助手可将CAD布局空间、模型空间的图纸批量合并到模型空间内。</p>
          <img src="./static/data/helpdata/imgs/help/capter5-1-1.png" class="row_img"/> 
          `
        }, {
            id:'5-2',
            label: '操作视频',
            title:'DWG合并助手',
            icon:'icon iconfont full-icon-icon_450',
            type:1,
            content:`
            <h3>操作视频</h3>
            <iframe src="//player.bilibili.com/player.html?aid=725664971&bvid=BV1ES4y1Y7Fr&cid=575503996&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"  class="videoDiv"> </iframe>
            `
        }]
      },{
        id:6,
        label: '键盘侠',
        type:0,
        children: [{
          id:'6-1',
          label: '软件介绍',
          title:'键盘侠',
          icon:'icon iconfont full-icon-icon_154',
          type:1,
          content:`
            <p>键盘侠是一款在CAD上自动切换中英文输入法的软件。在CAD命令行里输入命令时自动是英文状态，编辑文字时自动是中文状态。解决工程师在绘图过程中，频繁的使用shift来切换中英文状态的操作。</p>
            <p>目前键盘侠是免费软件，软件内有当前版本到期时间，会定期推送新版软件，供用户一直使用。</p>
            <img src="./static/data/helpdata/imgs/help/capter6-1-1.png" class="row_img"/> 
          `
        }, {
            id:'6-2',
            label: '使用说明',
            title:'键盘侠',
            icon:'icon iconfont full-icon-icon_661',
            type:1,
            content:`
                <h3>使用方法：</h3>
                <ul class="steplist">
                    <div>软件支持AutoCAD2010-2022版本、中望CAD2020-2022版本、浩辰CAD2020-2022版本。
                    </div>
                        <div>
                            <p style="text-indent: 0;"><b>切换输入法模式：</b> 当在使用某些命令需要输入为中文时，可将此命令全称添加到自定义命令中，设置成被穿透命令。此模式是系统为英语键盘时使用。</p>
                            <p style="text-indent: 0;"><b>无视输入法模式：</b> 此模式为在中文输入法状态下，在CAD命令行中直接输入即为英文，编辑文字时为中文状态。在命令行中输入命令时软件可无视当前输入法状态。</p>
                            <img src="./static/data/helpdata/imgs/help/capter6-2-1.png" style="margin-bottom:20px;max-width:100%" />  
                        </div>
                    </li>
                    <li> 当在CAD命令行中进行某些操作时需要输入中文时，可将此命令全称添加到自定义命令中即可。</li>
                </ul>
                <iframe src="//player.bilibili.com/player.html?aid=638141749&bvid=BV1sY4y1e715&cid=575445629&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=true" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"  class="videoDiv" > </iframe>
            `
        }, {
            id:'6-3',
            label: '常见问题',
            title:"键盘侠",
            icon:'icon iconfont full-icon-icon_440',
            type:2,
            content:`
            <div class="questionList" id="Q1">
                <div class="Q_Box">
                    <em>问：</em>
                    <h3>1.在CAD命令行里已可以输入英文，但是在其他应用窗体中不能直接输入中文了？</h3>
                </div>
                <div class="A_Box">
                    <p> <em>答：</em>
                        <div> WIN10操作系统需要进行以下设置，不同版本的WIN10操作系统略有不同。
                        打开系统设置，点击“时间和语言”</div>
                        <img src="./static/data/helpdata/imgs/help/capter6-3-1-1.png" class="row_img"/>  
                        <div>点击左侧边栏的“语言”后，再点击“拼写、键入和键盘设置”</div>
                        <img src="./static/data/helpdata/imgs/help/capter6-3-1-2.png" class="row_img"/> 
                        <div>点击“高级键盘设置”</div> 
                        <img src="./static/data/helpdata/imgs/help/capter6-3-1-3.png" class="row_img"/> 
                        <div>勾选“允许我为每个应用窗口使用不同的输入法”，就可以了</div> 
                        <img src="./static/data/helpdata/imgs/help/capter6-3-1-4.png" class="row_img"/> 
                    </p>
                </div>
            </div>
            `,
            idlist:[{
                id:"Q1",
                label:"在CAD命令行里已可以输入英文，但是在其他应用窗体中不能直接输入中文了？"
            }]
        }]
      }
]