export default function ArticlePage() {
  return (
    <>
      {"\n              "}
      <div className={"card content-box-card"}>
        {"\n                "}
        <div className={"card-body portfolio-card article-details-card"}>
          {"\n                  "}
          <div className={"article-details-area"}>
            {"\n                    "}
            <div className={"main-image"}>
              {"\n                      "}
              <img
                src={"assets/img/TCP image.png"}
                alt={"blog-img-1"}
                className={"img-fluid w-100"}
              />
              {"\n                    "}
            </div>
            {"\n              \n                    "}
            <div className={"article-details-text"}>
              {"\n                      "}
              <h3 className={"main-title"}>
                {
                  "A Survey on TCP/IP Protocols Suite For\n                        communication"
                }
              </h3>
              {"\n                      "}
              <p>
                {
                  "Protocols are the set of rules and conventions that\n                        are used in exchanging of information between two machines\n                        in various layers of the network. A Protocol that support the\n                        sharing of resources that exist in different packet switching\n                        networks is presented. But the communication and resource\n                        sharing between different networks is not possible because of\n                        variation in induvial network such as packet sizes,\n                        transmission failure, error checking, flow control, sequencing\n                        etc. Some implementations issues are considered and\n                        problems, such as routing, accounting and timeouts are\n                        exposed.\n                       \n                        \n                      "
                }
              </p>
              {"\n                      "}
              <p>
                {
                  "About understanding what is TCP/IP first of all we\n                        have to know about what is Protocols [6]. The meaning of\n                        protocol is “It is allowed communication between networks”.\n                        For Sharing particular Data, you have made both devices as a\n                        friend or they have to agree some rules and Regulations\n                        between each other. A Protocol suite is defined as collection\n                        of protocols organized in different layers. The TCP/IP\n                        protocol suite is used in Internet today. To make the data\n                        meaningful, the computer and terminals share some common\n                        protocols (i.e. A set of agreed upon conventions). However,\n                        some protocols have addressed only the problem of\n                        communication on the same network.\n                        TCP/IP is short form of two important protocols\n                        namely Transmission Control Protocol/Internet protocol [1].\n                        TCP/IP is hierarchical protocol means that each upper layer\n                        protocol receives support and services from either one or more\n                        lower level protocols. In original TCP/IP protocol suite, there\n                        were four software layers built upon the hardware     "
                }
              </p>
              {"\n                      "}
              <blockquote>
                {"\n                        "}
                <p>
                  {
                    '\n                          " In this paper, we present TCP/IP Protocol suite, Host\n                          to Network layer protocol, Internet Protocols and many more\n                          our main aim of paper is to introduce TCP/IP protocols. "\n                        '
                  }
                </p>
                {"\n                      "}
              </blockquote>
              {
                "\n                     \n                     \n                    \n                      "
              }
              <div className={"leave-comments-area"}>
                {"\n                        "}
                <h2 className={"main-common-title"}>
                  {"Leave a Comment\n                        "}
                </h2>
                {"\n                        "}
                <div className={"comments-box"}>
                  {"\n                          "}
                  <div className={"row gx-3"}>
                    {"\n                            "}
                    <div className={"col-md-6"}>
                      {"\n                              "}
                      <div className={"mb-4"}>
                        {"\n                                "}
                        <label className={"form-label"}>{"Name"}</label>
                        {"\n                                "}
                        <input
                          type={"text"}
                          className={"form-control shadow-none"}
                          placeholder={"Enter your name"}
                        />
                        {"\n                              "}
                      </div>
                      {"\n                            "}
                    </div>
                    {"\n                            "}
                    <div className={"col-md-6"}>
                      {"\n                              "}
                      <div className={"mb-4"}>
                        {"\n                                "}
                        <label className={"form-label"}>{"Email"}</label>
                        {"\n                                "}
                        <input
                          type={"text"}
                          className={"form-control shadow-none"}
                          placeholder={"Enter your email"}
                        />
                        {"\n                              "}
                      </div>
                      {"\n                            "}
                    </div>
                    {"\n                            "}
                    <div className={"col-md-12"}>
                      {"\n                              "}
                      <div className={"mb-4"}>
                        {"\n                                "}
                        <label className={"form-label"}>{"Comment"}</label>
                        {"\n                                "}
                        <textarea
                          className={"form-control shadow-none"}
                          rows={"4"}
                          placeholder={"Type details about your inquiry"}
                        ></textarea>
                        {"\n                              "}
                      </div>
                      {"\n                            "}
                    </div>
                    {"\n                            "}
                    <div className={"col-md-12"}>
                      {"\n                              "}
                      <button className={"submit-btn"} type={"submit"}>
                        {
                          "\n                                Post Comment\n                                "
                        }
                        <svg
                          className={"icon"}
                          width={"20"}
                          height={"20"}
                          viewBox={"0 0 20 20"}
                          fill={"none"}
                          xmlns={"http://www.w3.org/2000/svg"}
                        >
                          {"\n                                  "}
                          <path
                            d={"M17.5 11.6665V6.6665H12.5"}
                            stroke={"white"}
                            strokeWidth={"1.5"}
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                          ></path>
                          {"\n                                  "}
                          <path
                            d={"M17.5 6.6665L10 14.1665L2.5 6.6665"}
                            stroke={"white"}
                            strokeWidth={"1.5"}
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                          ></path>
                          {"\n                                "}
                        </svg>
                        {"\n                              "}
                      </button>
                      {"\n                            "}
                    </div>
                    {"\n                          "}
                  </div>
                  {"\n                        "}
                </div>
                {"\n                      "}
              </div>
              {"\n                    "}
            </div>
            {"\n                  "}
          </div>
          {"\n                "}
        </div>
        {"\n              "}
      </div>
      {"\n            "}
    </>
  );
}

export function ArticlePageExtras() {
  return (
    <>
      {"\n\n      "}
      {"\n\n      "}
      {"\n      "}
      {"\n      "}
      {"\n    "}
    </>
  );
}
