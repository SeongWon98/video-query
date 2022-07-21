import classes from "./FilterForm.module.css";

function FilterForm() {
  return (
    <div className={classes.filters}>
      <div className={classes.model}>
        <label htmlFor="model-select">Model</label>
        <select id="model-select">
          <option value="">Select</option>
          <option value="">Faster R-CNN</option>
          <option value="">Mask R-CNN</option>
        </select>
      </div>

      <div className={classes.checkboxes}>
        <div className={classes.controls}>
          <div className={classes.checkbox}>
            <input id="car" value="car" name="platform" type="checkbox" />
          </div>
          <label htmlFor="car">car</label>
        </div>
        <div className={classes.controls}>
          <div className={classes.checkbox}>
            <input id="person" value="person" name="platform" type="checkbox" />
          </div>

          <label htmlFor="person">person</label>
        </div>
        <div className={classes.controls}>
          <div className={classes.checkbox}>
            <input id="truck" value="truck" name="platform" type="checkbox" />
          </div>

          <label htmlFor="truck">truck</label>
        </div>
        <div className={classes.controls}>
          <div className={classes.checkbox}>
            <input id="etc1" value="etc1" name="platform" type="checkbox" />
          </div>

          <label htmlFor="etc1">...</label>
        </div>
        <div className={classes.controls}>
          <div className={classes.checkbox}>
            <input id="etc2" value="etc2" name="platform" type="checkbox" />
          </div>

          <label htmlFor="etc2">...</label>
        </div>
        <div className={classes.controls}>
          <div className={classes.checkbox}>
            <input id="etc3" value="etc3" name="platform" type="checkbox" />
          </div>

          <label htmlFor="etc3">...</label>
        </div>
        <div className={classes.controls}>
          <div className={classes.checkbox}>
            <input id="etc4" value="etc4" name="platform" type="checkbox" />
          </div>

          <label htmlFor="etc4">...</label>
        </div>
        <div className={classes.controls}>
          <div className={classes.checkbox}>
            <input id="etc5" value="etc5" name="platform" type="checkbox" />
          </div>

          <label htmlFor="etc5">...</label>
        </div>
      </div>
    </div>
  );
}

export default FilterForm;
