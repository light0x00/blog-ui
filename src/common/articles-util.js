/* ------------------------------------------------------------------------------
处理文章数据的工具方法
------------------------------------------------------------------------------ */
const routePrefix = window.APP_CONFIG["articlesRoutePrefix"]

/**
 * 从路由路径中提取出文章的key
 * @param {*} routePath 路由路径
 */
export function extractArticleKeyFromRoutePath(routePath) {
    let extractKeyReg = new RegExp("^" + routePrefix, "g");
    return routePath.replace(extractKeyReg, "").replace(/(^\/)|(\/$)/g, "");
}

/**
 * 从文章树中找出指定key对于的文章信息
 * @param {*} articlesTrees 文章树
 * @param {*} key key
 */
export function searchArticle(articlesTrees, key) {
    function searchTree(treeNode) {
        if (treeNode.key == key) {
            return treeNode;
        }
        if (treeNode.isGroup) {
            for (let child of treeNode.childs) {
                let r = searchTree(child)
                if (r != null)
                    return r
            }
        }
        return null;
    }
    for (let rootNode of articlesTrees) {
        let r = searchTree(rootNode)
        if (r)
            return r;
    }
}

/**
 * 遍历树
 * @param {*} articlesTrees 文章树
 * @param {*} callback 每当遍历一个树节点时调用,传入节点,返回值将决定是否继续遍历
 */
export function recursiveArticlesTrees(articlesTrees, callback) {
    function recursiveTree(treeNode) {
        let canStop;
        if (treeNode.isGroup) {
            canStop = callback(treeNode)
            if (canStop) {
                return true;
            }

            for (let child of treeNode.childs) {
                canStop = recursiveTree(child)
                if (canStop)
                    return true;
            }
        } else {
            canStop = callback(treeNode)
            if (canStop)
                return true;
        }
        return false;
    }

    for (let rootNode of articlesTrees) {
        let r = recursiveTree(rootNode)
        if (r)
            return r;
    }
}
