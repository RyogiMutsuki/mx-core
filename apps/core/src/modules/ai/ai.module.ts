import { forwardRef, Module } from '@nestjs/common'

import { McpModule } from '../mcp/mcp.module'
import { AIAgentController } from './ai-agent/ai-agent.controller'
import { AIAgentService } from './ai-agent/ai-agent.service'
import { AiDeepReadingController } from './ai-deep-reading/ai-deep-reading.controller'
import { AiDeepReadingService } from './ai-deep-reading/ai-deep-reading.service'
import { AiSummaryController } from './ai-summary/ai-summary.controller'
import { AiSummaryService } from './ai-summary/ai-summary.service'
import { AiWriterController } from './ai-writer/ai-writer.controller'
import { AiWriterService } from './ai-writer/ai-writer.service'
import { AiService } from './ai.service'

@Module({
  imports: [forwardRef(() => McpModule)],
  providers: [
    AiSummaryService,
    AiService,
    AiWriterService,
    AiDeepReadingService,
    AIAgentService,
  ],
  controllers: [
    AiSummaryController,
    AiWriterController,
    AiDeepReadingController,
    AIAgentController,
  ],
  exports: [AiService],
})
export class AiModule {}
