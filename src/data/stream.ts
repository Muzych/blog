import matter from "gray-matter";
import type { StreamItem } from "@/types";



// 从Markdown文件解析Stream项目
export async function getAllStreamItems(): Promise<StreamItem[]> {
    try {
      // 读取Markdown文件
      const filePath = 'src/content/stream-items.md';
      // 使用fs/promises替代回调版本
      const fsPromises = await import('fs/promises');
      const fileContent = await fsPromises.readFile(filePath, 'utf-8');
      
      // 使用分隔符分割内容
      const itemSections = fileContent.split('<!-- stream-item -->');
      
      // 解析每个部分
      const items = itemSections
        .map((section: string, index: number) => {
          if (!section.trim()) return null;
          
          // 使用gray-matter解析frontmatter
          const { data, content } = matter(section.trim());
          
          // 确保必要的字段存在
          if (!data.type || !data.date) return null;
          
          return {
            id: index + 1,
            type: data.type,
            date: new Date(data.date),
            content: content.trim(),
            // 其他可选字段
            url: data.url,
            title: data.title,
            imageUrl: data.imageUrl,
            language: data.language,
            source: data.source,
            code: data.code
          } as StreamItem;
        })
        .filter((item): item is StreamItem => item !== null);
      
      return items;
    } catch (error) {
      console.error('读取Stream数据失败:', error);
      return [];
    }
  }


  // 按日期排序
export function sortStreamItemsByDate(items: StreamItem[]): StreamItem[] {
    return [...items].sort((a, b) => b.date.getTime() - a.date.getTime());
  }