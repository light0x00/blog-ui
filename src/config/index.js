
/**
 * 1. DefinePlugin 会替换PROFILE(dev|pro)
 * 2. 根据PROFILE导入对应的配置
 */
import "./application";

/**
 * global component 
 */
import '@/components'

/**
 * Vue Plugins
 */
import "@/config/plugins";

/**
 * axios
 */
import "@/config/libs/AxiosConfig";
