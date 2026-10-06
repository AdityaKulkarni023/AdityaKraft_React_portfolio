export default function BackgroundShapes() {
  return (
    <div className="background-shapes" aria-hidden="true">
      <div className="shape-1 common-shape">
        <img src="/assets/img/bg/banner-shape-1.png" alt="" />
      </div>
      <div className="shape-2 common-shape">
        <img src="/assets/img/bg/banner-shape-1.png" alt="" />
      </div>
      <div className="threed-shape-1 move-with-cursor" data-value="1">
        <img src="/assets/img/bg/object-3d-1.png" alt="" />
      </div>
      <div className="threed-shape-2 move-with-cursor" data-value="1">
        <img src="/assets/img/bg/object-3d-2.png" alt="" />
      </div>
    </div>
  );
}
