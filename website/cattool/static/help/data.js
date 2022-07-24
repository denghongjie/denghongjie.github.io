const Helplists=[
    {
        id:1,
        label: '易批注',
        type:0,
        children: [{
          id:'1-1',
          label: '软件介绍',
          title:'易批注',
          icon:'icon iconfont full-icon-icon_154',
          type:1,   //type 0表示父级节点   1表示正常点击切换数据   2表示出现右侧浮动面板
          content:`
            <a href="./static/help/file/易批注操作说明文档.pdf" target=’blank’ download="易批注操作说明文档.pdf" class="downfilebtn">下载PDF</a>
            <p>探索者易批注软件是一款高效型CAD审图批注软件。通过绘制云线及文字说明对DWG图纸进行在位标记。软件以云服务为支撑，可将图纸及批注意见通过云端在线传输。软件可定义项非常丰富，极大提高生产效率，同时操作简单、易用易学。</p>
            <div>
                <img src="./static/help/imgs/ypz/image2.png" class="row_img"/> 
                <div class="imglabel">下拉式菜单</div>
                <img src="./static/help/imgs/ypz/image1.png" class="row_img"/> 
                <div class="imglabel">Ribbon菜单</div>
            </div>
            
          `
        },{
            id:'1-2',
            label: '下载软件和获取账号',
            title:'易批注',
            icon:'icon iconfont full-icon-icon_184',
            type:1,
            content:`
                <h3>下载软件和免费注册</h3>
                <div class="sucesser">点击下方链接可下载易批注软件，并获得免费使用权限。</div> 
                <a href="https://www.tszcloud.com.cn/website">https://www.tszcloud.com.cn/website</a>
                <img src="./static/help/imgs/ypz/image3.png" class="row_img"/>
            `
        },{
            id:'1-3',
            label: '软件安装与初次启动',
            title:'易批注',
            icon:'icon iconfont full-icon-icon_480',
            type:1,
            content:`
                <h3>软件安装：</h3>
                <ul class="steplist">
                    <li> 操作系统：支持Win7 、Win10、Win11系统。暂不支持苹果Mac系统，Mac系统可安装双系统或通过虚拟机安装Windows；</li>
                    <li> 软件支持AutoCAD2010-2022版本；</li>
                    <li> 安装易批注时请先关闭AutoCAD和相关进程；</li>
                    <li> 易批注软件已进行了数字证书的签名，在大部分系统环境下均可正常安装。如果安全软件仍误报病毒或安装后出现异常，请在安装前暂时将杀毒软件退出，安装完成后再开启；</li>
                    <li> 如果需要重新安装，直接安装即可，不需要先卸载后安装。</li>
                </ul>
                <h3>初次启动：</h3>
                <ul class="steplist">
                    <li> 安装完成后点击易批注图标启动软件，注意：如CAD弹出加载应用对话框，全部点击加载即可。</li>
                </ul>
            `
        },{
            id:'1-4',
            label: '多场景操作视频',
            title:'易批注',
            icon:'icon iconfont full-icon-icon_450',
            type:1,
            content:`
                <h3>图纸校审操作视频</h3>
                <div class="sucesser">设计师：一键完成图纸送审——对位加载批注意见——发送图纸复审</div>
                <div class="sucesser">设计总工：校审图纸快速批注——一键发送批注意见——快速接收复审图纸</div>
                <video width="800" height="500" controls autoplay>
                    <source src="./static/help/video/探索者软件丨易批注多场景操作视频.mp4" type="video/mp4">
                    您的浏览器不支持 video 标签。
                </video>
              
            `
        },{
            id:'1-5',
            label: '批注飞传操作视频',
            title:'易批注',
            icon:'icon iconfont full-icon-icon_450',
            type:1,
            content:`
              <h3>操作视频</h3>
              <video width="800" height="500" controls autoplay>
                <source src="./static/help/video/探索者软件丨易批注批注飞传操作视频.mp4" type="video/mp4">
                您的浏览器不支持 video 标签。
              </video>
              
            `
        },{
            id:'1-6',
            label: '绘制批注操作视频',
            title:'易批注',
            icon:'icon iconfont full-icon-icon_450',
            type:1,
            content:`
              <h3>操作视频</h3>
              <video width="800" height="500" controls autoplay>
                <source src="./static/help/video/探索者软件丨易批注绘制批注操作视频.mp4" type="video/mp4">
                您的浏览器不支持 video 标签。
              </video>
            `
        },{
            id:'1-7',
            label: '软件操作说明',
            title:'易批注',
            icon:'icon iconfont full-icon-icon_661 h_treeIcon',
            type:2,
            content:`
            <a href="./static/help/file/易批注操作说明文档.pdf" target=’blank’ download="易批注操作说明文档.pdf" class="downfilebtn">下载PDF</a>
                <div class="questionList" id="Q1">
                    <div class="Q_Box">
                        <em>NO：</em>
                        <h3>1. 授权与登录：</h3>
                        <div> 首先点击登录按钮，若未注册过易批注，在弹出对话框中选择验证码登录，输入手机号并获取验证码，使用验证码完成登录；（登录成功后可设置密码）</div>
                        <img src="./static/help/imgs/ypz/image4.png" class="row_img"/>
                        <div> 若已注册易批注，可使用密码直接登录。</div>
                        <img src="./static/help/imgs/ypz/image5.png" class="row_img"/>
                    </div>
                </div>

                <div class="questionList" id="Q2">
                    <div class="Q_Box">
                        <em>NO：</em>
                        <h3>2. 批注飞传</h3>
                        <div>收件箱：鼠标悬停到收件箱批注条目，点击鼠标右键，如下图显示。</div>
                        <img src="./static/help/imgs/ypz/image6.png" class="row_img"/>
                        <div>下载Dwg。将发送来的DWG文件下载到本地。</div>
                        <div>打开Dwg。直接打开Dwg文件。</div>
                        <div>查看-批注信息。浏览批注内容信息，如下图所示。</div>
                        <img src="./static/help/imgs/ypz/image7.png" class="row_img"/>
                        <div>已发送：已发送功能可记录已发送的批注信息及Dwg文件。</div>
                        <img src="./static/help/imgs/ypz/image8.png" class="row_img"/>
                    </div>
                </div>

                <div class="questionList" id="Q3">
                    <div class="Q_Box">
                        <em>NO：</em>
                        <h3>3. 加载批注</h3>
                        <div>加载-批注到当前Dwg文档。使用该功能仅加载（基点对齐方式）批注到当前的DWG图纸中。</div>
                        <img src="./static/help/imgs/ypz/image9.png" class="row_img"/> 
                    </div>
                </div>


                <div class="questionList" id="Q4">
                    <div class="Q_Box">
                        <em>No：</em>
                        <h3>4. 绘制批注：</h3>
                        <img src="./static/help/imgs/ypz/image10.png" class="row_img"/> 
                        <div>批注类型
                            <ul class="steplist">
                                <li> 矩形：绘制矩形云线。</li>
                                <li> PL线：绘制多断线并组成一个封闭的图形生成的云线。</li>
                                <li> 基点：对点进行批注。</li>
                                <li> 连续绘制：勾选后可连续进行批注操作。</li>
                                <li> 多对一批注：多个云线对应一个批注内容。</li>
                            </ul>
                        </div>
                        <div>提示批注
                            <ul class="steplist">
                                <li> 在空白区域键入批注内容，选择对应专业、版次、批注人后点击确定。</li>
                            </ul>
                        </div> 
                        <img src="./static/help/imgs/ypz/image11.png" class="row_img"/>
                        <div>校审批注
                            <ul class="steplist">
                                <li> 校审批注较提示批注增加了批注的属性、规范、条款等内容，可直接从知识库中双击引入批注条款。</li>
                                <li> 立即入库勾选后，在输入栏输入的批注内容会自动引入到知识库列表中。</li>
                                <li> 知识库提供了根据属性、规范、条款、关键字等检索的功能，供设计校审人可以快速准确的查找到需要的批注条款。</li>
                            </ul>
                        </div> 
                        <img src="./static/help/imgs/ypz/image12.png" class="row_img"/>
                        <div>批注列表
                            <ul class="steplist">
                                <li> 批注列表是根据批注类型、批注时间以及批注汇总汇集而成的表。在批注列表中可以根据批注时间和类型快速查找批注内容，可根据批注列表中条目快速定位绘图区域批注的位置，可直接在批注列表中删除和编辑批注内容。</li>
                            </ul>
                        </div> 
                        <img src="./static/help/imgs/ypz/image13.png" class="row_img"/>
                    </div>
                </div>

                <div class="questionList" id="Q5">
                    <div class="Q_Box">
                        <em>NO：</em>
                        <h3>5. 批注设置：</h3>
                        <div>批注可对于外形、云线样式、批注文字字高、图层、演示等进行自定义设置。</div>
                        <img src="./static/help/imgs/ypz/image14.png" class="row_img"/> 
                    </div>
                </div>

                <div class="questionList" id="Q6">
                    <div class="Q_Box">
                        <em>No：</em>
                        <h3>6. 编辑批注：</h3>
                        <img src="./static/help/imgs/ypz/image15.png" class="row_img"/> 
                        <ul class="steplist">
                            <li> 显示批注，把已经隐藏的批注全部显示出来。</li>
                            <li> 隐藏批注，通过框选或者全选把批注隐藏。</li>
                            <li> 过滤批注，是根据批注的版次、专业、姓名、图号、图层、批注类型等属性选择性显示的功能。
                                <img src="./static/help/imgs/ypz/image16.png" class="row_img"/> 
                            </li>
                            <li> 编辑批注，弹出批注编辑对话框，重新编辑批注内容。</li>
                            <li> 移动批注，移动批注重新指定位置。</li>
                            <li> 删除批注，删除选择的批注。</li>
                            <li> 格式刷，拾取批注中的批注文字、图层、文字样式、颜色等属性，自动应用到需要其属性的其他批注内容。
                            <img src="./static/help/imgs/ypz/image17.png" class="row_img"/> </li>
                        </ul>
                    </div>
                </div>

                <div class="questionList" id="Q7">
                    <div class="Q_Box">
                        <em>No：</em>
                        <h3>7. 中英文自动切换：</h3>
                        <div>支持输入法在中文状态下在CAD命令栏输入英文，在使用CAD文字命令时输入中文；智能切换中英文输入法。也可点击输入法设置按钮进行自定义设置。</div>
                        <img src="./static/help/imgs/ypz/image18.png" class="row_img"/> 
                    </div>
                </div>

                <div class="questionList" id="Q8">
                    <div class="Q_Box">
                        <em>NO：</em>
                        <h3>8. 个人中心：</h3>
                        <div>如对易批注软件功能不了解的用户，可点击进入个人中心，查看浏览易批注应用场景、产品亮点、产品介绍等快速了解软件，方便快速上手使用。</div>
                        <img src="./static/help/imgs/ypz/image19.png" class="row_img"/> 
                        <div>可查看个人授权，点击首页右上角的“登录”按钮，输入易批注软件的用户名、密码或短信验证码登录，点击首页的“个人中心”即可浏览个人软件授权信息。</div>
                        <img src="./static/help/imgs/ypz/image20.png" class="row_img"/> 
                    </div>
                </div>
             
              
            `,
            idlist:[{
                id:"Q1",
                label:"授权与登录"
            },{
                id:"Q2",
                label:"批注飞传"
            },{
                id:"Q3",
                label:"加载批注"
            },{
                id:"Q4",
                label:"绘制批注"
            },{
                id:"Q5",
                label:"批注设置"
            },{
                id:"Q6",
                label:"编辑批注"
            },{
                id:"Q7",
                label:"中英文自动切换"
            },{
                id:"Q8",
                label:"个人中心"
            }]
        },{
            id:'1-8',
            label: '常见问题',
            title:'易批注',
            icon:'icon iconfont full-icon-icon_440',
            type:2,
            content:`
                <div class="questionList" id="Q1">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>1.忘记登录密码怎么办？</h3>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em>
                            <div>1.可选择手机验证码登录，登录成功后点击“修改密码”，输入新密码即可。</div>
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q2">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>2. 启动cad后找不到易批注怎么办？</h3>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                                1.关闭CAD，右键点击易批注图标，选择以管理员身份运行，重新启动软件；<br />
                                2.若方法一没有解决，可重新安装一次易批注软件即可。<br />
                            </div>
                        </p>
                    </div>
                </div>

                <div class="questionList" id="Q3">
                    <div class="Q_Box">
                        <em>问：</em>
                        <h3>3. 每次都要点击易批注图标启动才可以吗？</h3>
                    </div>
                    <div class="A_Box">
                        <p> <em>答：</em> 
                            <div>
                                首次安装启动易批注软件后，会自动加载到CAD内，以后只需要启动CAD即可，易批注会跟随CAD自动启动。
                            </div>
                        </p>
                    </div>
                </div>
            `,
            idlist:[{
                id:"Q1",
                label:"忘记登录密码怎么办？"
            },{
                id:"Q2",
                label:"启动cad后找不到易批注怎么办？"
            },{
                id:"Q3",
                label:"每次都要点击易批注图标才能启动软件吗？"
            }]
        }]
      }
]