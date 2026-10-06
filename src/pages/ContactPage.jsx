export default function ContactPage() {
  return (
    <>
      {"\n              "}
      <div className={"card content-box-card"}>
        {"\n                "}
        <div className={"card-body portfolio-card contact-card"}>
          {"\n                  "}
          <div className={"top-info"}>
            {"\n                    "}
            <div className={"text"}>
              {"\n                      "}
              <h1 className={"main-title"}>
                {"Let's 👋 "}
                <span>{"Work"}</span>
                {" Together"}
              </h1>
              {"\n                      "}
              <p>
                {
                  "Whether you have a project in mind, a job opportunity, or just want to connect — I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible."
                }
              </p>
              {"\n                    "}
            </div>
            {"\n                  "}
          </div>
          {"\n                  "}
          <div className={"contact-area"}>
            {"\n                    "}
            <div className={"leave-comments-area"}>
              {"\n                      "}
              <div className={"comments-box"}>
                {"\n                        "}
                <form
                  id={"contact-form"}
                  action={"https://formspree.io/f/mvoenqrp"}
                  method={"POST"}
                >
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
                          name={"name"}
                          required={true}
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
                          name={"email"}
                          required={true}
                          type={"email"}
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
                        <label className={"form-label"}>{"Subject"}</label>
                        {"\n                                "}
                        <input
                          name={"subject"}
                          required={true}
                          type={"text"}
                          className={"form-control shadow-none"}
                          placeholder={"What is this regarding?"}
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
                        <label className={"form-label"}>{"Message"}</label>
                        {"\n                                "}
                        <textarea
                          name={"message"}
                          required={true}
                          className={"form-control shadow-none"}
                          rows={"4"}
                          placeholder={"Type your message here"}
                        ></textarea>
                        {"\n                              "}
                      </div>
                      {"\n                            "}
                    </div>
                    {"\n                            "}
                    <div className={"col-md-12"}>
                      {"\n                              "}
                      <button
                        className={"submit-btn"}
                        id={"contact-submit-btn"}
                        type={"submit"}
                      >
                        {
                          "\n                                Send Message\n                                "
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
                </form>
                {"\n                        "}
                <p className={"ajax-response mb-0"}></p>
                {"\n                      "}
              </div>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"contact-map-area"}>
              {"\n                      "}
              <iframe
                src={
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121116.5!2d73.7898!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c00000000000%3A0x0!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716481375795!5m2!1sen!2sin"
                }
                allowFullScreen={true}
                loading={"lazy"}
                referrerPolicy={"no-referrer-when-downgrade"}
              ></iframe>
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

export function ContactPageExtras() {
  return (
    <>
      {"\n\n      "}
      {"\n      \n\n      "}
      {"\n      "}
      {"\n      "}
      {"\n    "}
    </>
  );
}
