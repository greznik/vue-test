import { createLocalVue, mount } from "@vue/test-utils";
import Input from "@/components/TheInput.vue";
import vuetify from "vuetify";

describe("Input", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(vuetify);

    wrapper = mount(Input, {
      localVue,
    });
  });

  it("Find input-type text ", () => {
    expect(wrapper.contains('[data-test="TheInput"]')).toBe(true);
  });

  it('Check emitted "onClick" event', () => {
    wrapper.vm.$emit("onClick", "84102");
    expect(wrapper.emitted().onClick).toBeTruthy();
  });
});
