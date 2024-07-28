### 操作流程
1. 点击`fork`

![fork.png](tutorial/fork.png)

2. 获取 [Cloudflare Token](https://dash.cloudflare.com/profile/api-tokens), 创建`API Tokens`

![img.png](tutorial/token_summary.png)

3. 配置环境变量
   ![set-env.png](tutorial%2Fset-env.png)
- CLOUDFLARE_API_TOKEN=from_cloudflare_token
- CLOUDFLARE_ACCOUNT_ID=from_cloudflare_account_id
- CLOUDFLARE_ZONE_NAME=example.com
- CLOUDFLARE_EMAIL_ADDRESS=xxx@gmail.com
4. 触发部署
   ![trigger_action.png](tutorial%2Ftrigger_action.png)
5. 访问你到邮箱地址，使用“CLOUDFLARE_EMAIL_ADDRESS”填写的邮箱进行登录。
